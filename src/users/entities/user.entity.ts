import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserImage } from './user-image.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  apellidos: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  edad: number;

  @Column({ type: 'varchar',nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  sexo: string;
  
  @Column({ type: 'varchar', length: 100, nullable: false })
  telefono: number;

    //
    autor:User;

  @OneToMany(() => UserImage, (userImage) => userImage.user,{
    cascade: true,
  }) 
images?: UserImage[];
}
