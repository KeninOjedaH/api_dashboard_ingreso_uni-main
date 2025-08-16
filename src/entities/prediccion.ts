import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity('predicciones')
export class Prediccion {
    @PrimaryGeneratedColumn({ name: 'id_prediccion' })
    idPrediccion: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @Column({ name: 'horas_aptitud' })
    horasAptitud: number;

    @Column({ name: 'horas_matematica' })
    horasMatematica: number;

    @Column({ name: 'horas_fisica_quimica' })
    horasFisicaQuimica: number;

    @Column({ name: 'horas_total_semana' })
    horasTotalSemana: number;

    @Column({ name: 'anio_nacimiento' })
    anioNacimiento: number;

    @Column({ name: 'anio_egreso_colegio' })
    anioEgresoColegio: number;

    @Column({ name: 'anio_postula' })
    anioPostula: number;

    @Column({ name: 'especialidad' })
    especialidad: string;

    @Column({ name: 'modalidad' })
    modalidad: string;

    @Column({ name: 'probabilidad_ingreso', type: 'decimal', precision: 5, scale: 2 })
    probabilidadIngreso: number;

    @Column({ name: 'prediccion', type: 'int', default: 0 })
    prediccion: number;

    @Column({ name: 'riesgo', type: 'char', length: 1, default: 'L' })
    riesgo: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;
}
