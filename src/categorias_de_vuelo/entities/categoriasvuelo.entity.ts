import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoriasvuelo')
export class CategoriasVuelo {

  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column ({type: 'varchar', nullable: false})
  clase_economica: string;

  @Column({ type: 'numeric', nullable: false })
  clase_ejecutiva: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  primera_clase_VIP: string;

}