import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagosvuelo')
export class PagosVuelo {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  reservas: string;

  @Column({ type: 'numeric', nullable: false })
  metodo_pago: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cantidad_monetaria: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  fecha: Date;
 
}