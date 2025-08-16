import 'dotenv/config';
import { DataSource } from "typeorm";
import { Colegio } from '../entities/colegio';
import { Parametro } from '../entities/parametro';
import { Prediccion } from '../entities/prediccion';
import { TipoParametro } from '../entities/tipo-parametro';
import { Usuario } from '../entities/usuario';

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT as any || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'name',
    entities: [
        Colegio,
        Parametro,
        Prediccion,
        TipoParametro,
        Usuario,
    ],
    logging: true
});

export default AppDataSource;