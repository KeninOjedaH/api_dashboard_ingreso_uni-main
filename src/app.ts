import express, { Application, Request, Response } from 'express';
import AppDataSource from './config/appdatasource';
import cors from 'cors';

import authRouter from './routes/auth.route';
import usuarioRouter from './routes/usuario.route';
import prediccionRouter from './routes/prediccion.route';
import { BaseResponse } from './shared/base-response';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/predicciones', prediccionRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json(BaseResponse.error('Recurso no encontrado', 404));
});

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}
export default app;