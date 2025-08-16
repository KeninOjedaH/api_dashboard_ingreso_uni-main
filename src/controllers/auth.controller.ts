import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as authService from "../service/auth.service";
import { MENSAJE_RESPONSE } from "../shared/constants";

export const login = async (req: Request, res: Response) => {
    try {
        const { nombreUsuario, clave } = req.body;
        const result = await authService.login(nombreUsuario, clave);
        if (!result) {
            res.status(401).json(BaseResponse.error('Usuario o clave incorrectos', 401));
        }
        res.json(BaseResponse.success(result, 'Inicio de sesión exitoso'));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }

}