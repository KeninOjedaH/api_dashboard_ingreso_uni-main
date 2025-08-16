import AppDataSource from "../config/appdatasource";
import { Prediccion } from "../entities/prediccion";
import { Usuario } from "../entities/usuario";


const repository = AppDataSource.getRepository(Prediccion);


export const listarPredicciones = async (idUsuario: number) => {
    return await repository.find({
        where: {
            usuario: {
                idUsuario: idUsuario,
            }
        },
    });
}

export const insertarPrediccion = async (usuario: Partial<Usuario>) => {
    const nuevoUsuario = repository.create(usuario);
    return await repository.save(nuevoUsuario);
}

export const callApiPrediccion = async (path: string, body: any = null) => {
    const urlPython = process.env.URL_API_PYTHON; // Asegúrate de que la URL esté correcta
    let response;
    try {
        // Si no hay cuerpo (GET request)
        if (body === undefined || body === null) {
            response = await fetch(`${urlPython}${path}`, {
                method: 'GET',  // Método GET
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            // Si hay cuerpo (POST request)
            response = await fetch(`${urlPython}${path}`, {
                method: 'POST', // Método POST
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body), // Convertimos el cuerpo a JSON
            });
        }

        // Si la respuesta es exitosa, retornar los datos
        if (response.ok) {
            return await response.json(); // Convierte la respuesta a JSON
        } else {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw new Error(`Error de conexión a la API Python: ${error.message}`);
    }
};


// export const callApiPrediccion = async (path:string, body: any = null) => {
//     //call with axios
//     const axios = require('axios');
//     let response;
//     if(body === undefined || body === null) {
//         response = await axios.get(`${process.env.URL_API_PYTHON}${path}`, {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });
//     } else  {
//         response = await axios.post(`${process.env.URL_API_PYTHON}${path}`, body, {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//     }
     
//     return response.data;
// }