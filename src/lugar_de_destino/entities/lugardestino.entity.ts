import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('lugardestino')
export class LugarDestino {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  nombre_destino: string;

  @Column({ type: 'numeric', nullable: false })
  duracion_vuelo: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  coordenadas: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  descripcion: string;
 
}