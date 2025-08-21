import { getUsersNameSede } from "../service/ServiceUsers.js";

export const getUsersNameSedeC = async (req, res) => {
    try {
        const usuarios = await getUsersNameSede()
        return res.json(usuarios)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "No se pudo obtener la información de usuarios"});
    }
}