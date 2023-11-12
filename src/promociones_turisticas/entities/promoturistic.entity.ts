import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('promoturistic')
export class PromoTuristic {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  fechas_promocion: string;

  @Column({ type: 'varchar', nullable: false })
  reservaciones: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  combo_familiar: string;

  @Column({ type: 'varchar', nullable: false })
  tipo_de_viaje: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombres_aerolineas: string;

  @Column({ type: 'varchar', nullable: false })
  paises: string;

  @Column({ type: 'int4' })
  precios: number;

  @Column({ type: 'int4' })
  telefono: number;

}