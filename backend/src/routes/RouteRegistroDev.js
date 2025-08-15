import { Router } from 'express'
import { RegistroDevolucionesC } from "../controllers/ControllerRegistroDev.js";

const router = Router()

router.post('/', RegistroDevolucionesC);

export default router