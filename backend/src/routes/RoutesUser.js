import { Router } from "express";
import { getUsersNameSedeC } from "../controllers/ControllerUser.js";

const router = Router()

router.get('/NamePunto', getUsersNameSedeC);

export default router;