import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pistas')
export class Pistas {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'int4'})
  numero: number;

  @Column({ type: 'varchar', nullable: false })
  desplegue: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  aterrizajes: string;

  @Column({ type: 'date', nullable: false })
  hora: Date;

}