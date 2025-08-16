import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Colegio } from "./colegio";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @ManyToOne(() => Colegio)
    @JoinColumn({ name: 'id_colegio' })
    colegio: Colegio;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'apellido_paterno' })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno' })
    apellidoMaterno: string;

    @Column({ name: 'nombre_usuario' })
    nombreUsuario: string;

    @Column({ name: 'tipo_usuario' })
    tipoUsuario: string;

    @Column({ name: 'clave' })
    clave: string;

    @Column({ name: 'correo' })
    correo: string;

    @Column({ name: 'sexo' })
    sexo: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'fecha_nacimiento' })
    fechaNacimiento: Date;

    @Column({ name: 'anio_egreso_colegio' })
    anioEgresoColegio: number;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;
}
