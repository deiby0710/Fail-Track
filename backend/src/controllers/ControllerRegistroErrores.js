import { createError } from "../service/ServiceRegistroErrores.js";

export const  createRegistroError = async(req, res) => {
    try {
        const { nombre, tipoError, punto, modalidad, fecha, eps } = req.body;

        if (!nombre || !tipoError || !punto || !modalidad || !fecha || !eps) {
            return res.status(400).json({message: "Campos obligatorios: Nombre, TipoError, Punto, Modalidad, Fecha, EPS"})
        }

        const created = await createError({
            nombre,
            tipoError,
            punto,
            modalidad,
            fecha,
            eps
        });

        return res.status(201).json(created)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'No se puede crear el registro'})
    }
}