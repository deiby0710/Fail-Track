import { Router } from "express";
import { createRegistroError } from "../controllers/ControllerRegistroErrores.js";

const router = Router()

router.post('/', createRegistroError);

export default router;