import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DataSource } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { UserImage } from '../entities/user-image.entity';
import * as bcrypt from "bcrypt";
import { loginUserDto } from '../dto/login-user.dto';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,

        @InjectRepository(UserImage)
        private readonly userImageRepo: Repository<UserImage>,

        private readonly dataSource: DataSource,
    ){}

    //Crando funcion para crear una imagen
    async create(userDto: CreateUserDto) {
        const { images = [], password, ...detailsUser} = userDto;
    
        const user = await this.userRepo.create({...detailsUser,
            password: bcrypt.hashSync(password, 10),
            images: images.map((image) =>
            this.userImageRepo.create({ url:image }),
            ),
        });   

        await this.userRepo.save(user);
        return user;
    }

    async login(login: loginUserDto) {
        const { password, email, } = login;
        const user = await this.userRepo.findOne({
            where: { email },
            select: { password: true, email: true },
        });

        if (!user) {
            throw new UnauthorizedException(
                'Credenciales no validas, correo no encontrado',
            );
        }

        if (!bcrypt.compareSync(password, user.password)) {
            throw new UnauthorizedException(
            'Credenciales no validas, correo no encontrado',
            );
        }
            return user;
    }

    findOne(id: number){
        return this.userRepo.findOne({
            where: {id},
            relations:{
                autor: true,
            },
        });
    }

    findAll() {
        return this.userRepo.find({
            order: { id: 'ASC'},
            relations:{
                images: true,
            },  
        });
    }

    //Eliminar un registro
    async remove(id: number) {
        const User = await this.findOne(id);
        await this.userRepo.remove(User);
        return 'Usuario eliminado con exito!';
    }

    async update(id: number, cambios: CreateUserDto) {
        const { images, ...updateAll } = cambios;
        const user = await this.userRepo.preload({
        id: id,
        ...updateAll,  
        });
    
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        if(images) {
        
            await queryRunner.manager.delete(UserImage, {user: {id}});
    
            //Creamos nuevas imagenes de producto
            user.images = images.map((image) =>
                this.userImageRepo.create({ url: image}),
            );
        } else {
            user.images = await this.userImageRepo.findBy({ user: {id} });
        }
    
        //Guardamos en usuario
        await queryRunner.manager.save(user);
    
        //Se finaliza la transaccion y liberamos el queryRunner
        await queryRunner.commitTransaction();
        await queryRunner.release();
    
        return user;
        }

}