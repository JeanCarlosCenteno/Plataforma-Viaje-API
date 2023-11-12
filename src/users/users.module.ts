import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserImage } from './entities/user-image.entity';
import { UsersController } from './controller/user.controller';
import { UsersService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserImage])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersModule],
})
export class UsersModule {}