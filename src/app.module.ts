import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LugarDestinoModule } from './lugar_de_destino/lugardestino.module';
import { PagosVuelo } from './pagos_de_vuelo/entities/pagosvuelo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'Travel',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    LugarDestinoModule,
    PagosVuelo,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

