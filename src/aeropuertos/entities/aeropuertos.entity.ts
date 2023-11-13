import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('aeropuertos')
export class Aeropuertos {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  nombre: string;

  @Column({ type: 'varchar', nullable: false })
  ciudad: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  pais: string;

  @Column({ type: 'varchar', nullable: false })
  avion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  vuelo: string;

  @Column({ type: 'varchar', nullable: false })
  pista: string;

}