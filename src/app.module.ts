import { ClientesModule } from './clientes/clientes.module';
import { PagosVueloModule } from './pagos_de_vuelo/pagosvuelo.module';
import { LugarDestinoModule } from './lugar_de_destino/lugardestino.module';
import { CategoriasVueloModule } from './categorias_de_vuelo/categoriasvuelo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AeropuertosModule } from './aeropuertos/aeropuertos.module';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { PistasModule } from './pistas_aterrizajes/pistas.module';
import { PromoTuristicModule } from './promociones_turisticas/promoturistic.module';


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
    AeropuertosModule,
    CategoriasVueloModule,
    FilesModule,
    LugarDestinoModule,
    PagosVueloModule,
    UsersModule,
    PistasModule,
    PromoTuristicModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

