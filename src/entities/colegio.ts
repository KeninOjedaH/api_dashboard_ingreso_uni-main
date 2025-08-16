import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('colegios')
export class Colegio {
    @PrimaryGeneratedColumn({ name: 'id_colegio' })
    idColegio: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'distrito_ubigeo' })
    distritoUbigeo: string;

    @Column({ name: 'direccion' })
    direccion: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;
}
