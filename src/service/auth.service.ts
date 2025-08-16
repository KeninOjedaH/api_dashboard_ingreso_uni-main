import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import { ESTADO_AUDITORIA } from "../shared/constants";

const repository = AppDataSource.getRepository(Usuario);

export const login = async (nombreUsuario: string, clave: string): Promise<Partial<Usuario>> => {
    return await repository.findOne({
        where: {
            estadoAuditoria: ESTADO_AUDITORIA.ACTIVO,
            nombreUsuario: nombreUsuario,
            clave: clave,
        },
        relations: ['colegio'],
    });
}