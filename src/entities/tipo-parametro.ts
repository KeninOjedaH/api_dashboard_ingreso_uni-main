import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipo_parametros')
export class TipoParametro {
    @PrimaryGeneratedColumn({ name: 'id_tipo_parametro' })
    idTipoParametro: number;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;
}
