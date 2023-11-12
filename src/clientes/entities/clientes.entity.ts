import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Clientes {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  nombre_completo: string;

  @Column({ type: 'varchar', nullable: false })
  apellido_completo: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  edad: string;

  @Column({ type: 'varchar', nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  pais_de_origen: string;

  @Column({ type: 'numeric', nullable: false })
  telefono: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  credenciales: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  certificado_vacunacion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  fecha_vencimineto_pasaporte: Date;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direcion_de_destino: string;

}