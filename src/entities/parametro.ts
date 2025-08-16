import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TipoParametro } from "./tipo-parametro";

@Entity('parametros')
export class Parametro {
    @PrimaryGeneratedColumn({ name: 'id_parametro' })
    idParametro: number;

    @ManyToOne(() => TipoParametro)
    @JoinColumn({ name: 'id_tipo_parametro' })
    idTipoParametro: TipoParametro;

    @Column({ name: 'valor' })
    valor: string;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;
}
