import { Request, Response } from "express";
import * as usuarioService from "../service/usuario.service";
import { BaseResponse } from "../shared/base-response";
import { MENSAJE_RESPONSE } from "../shared/constants";

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        const { tipoUsuario } = req.query;
        const result = await usuarioService.listarUsuarios(tipoUsuario as string);
        res.json(BaseResponse.success(result));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuario = req.body;
        const result = await usuarioService.insertarUsuario(usuario);
        res.status(201).json(BaseResponse.success(result, MENSAJE_RESPONSE.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}