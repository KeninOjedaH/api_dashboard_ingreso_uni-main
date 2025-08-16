import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as prediccionService from "../service/prediccion.service";
import { MENSAJE_RESPONSE } from "../shared/constants";


export const listarPredicciones = async (req: Request, res: Response) => {
    try {
        const { idUsuario } = req.query;
        const result = await prediccionService.listarPredicciones(Number(idUsuario));
        res.json(BaseResponse.success(result));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const insertarPrediccion = async (req: Request, res: Response) => {
    try {
        const prediccion = req.body;

           
        await prediccionService.insertarPrediccion(prediccion);

        res.status(201).json(BaseResponse.success(null, MENSAJE_RESPONSE.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const listarParametros = async (req: Request, res: Response) => {
    try {
        
        const result = await prediccionService.callApiPrediccion('/opciones');
        res.json(BaseResponse.success(result));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}