import { Router } from "express";
import { insertarUsuario, listarUsuarios } from "../controllers/usuario.controller";

const router: Router = Router();
router.get('', listarUsuarios);
router.post('', insertarUsuario);

export default router;