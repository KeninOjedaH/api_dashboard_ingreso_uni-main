import { Router } from "express";
import { insertarPrediccion, listarParametros, listarPredicciones } from "../controllers/predicion.controller";

const router: Router = Router();
router.get('', listarPredicciones);
router.post('', insertarPrediccion);
router.get('/parametros',listarParametros)

export default router;