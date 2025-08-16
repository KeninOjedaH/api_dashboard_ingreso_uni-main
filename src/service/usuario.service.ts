import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";


const repository = AppDataSource.getRepository(Usuario);


export const listarUsuarios = async (tipoUsuario: string) => {
    return await repository.find({
        where: {
            tipoUsuario: tipoUsuario,
        },
    });
}

export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    const nuevoUsuario = repository.create(usuario);
    return await repository.save(nuevoUsuario);
}