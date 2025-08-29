import { RegistroDevolucionesS } from "../service/ServiceRegistroDev.js";
import { formateDate } from "../utils/dates.js";

export const RegistroDevolucionesC = async(req, res) => {
    try {
        const {
            fechaEnvio,
            fechaDevolucion,
            numFactura,
            punto,
            tipoContrato,
            facturaNueva,
            modalidad
        } = req.body;

        if (!fechaEnvio || !fechaDevolucion || !numFactura || !punto || !tipoContrato || !facturaNueva || !modalidad) {
            return res.status(400).json({ message: "Campos obligatorios: fechaEnvio, fechaDevolucion, numeroFactura, punto, tipoContrato, facturaNueva, modalidad"})
        }
        const respuesta = await RegistroDevolucionesS({
            fechaEnvio: formateDate(fechaEnvio),
            fechaDevolucion: formateDate(fechaDevolucion),
            numFactura,
            punto,
            tipoContrato,
            facturaNueva,
            modalidad,
            createdBy: req.user.id
        })

        return res.status(201).json(respuesta)
    } catch (error) {
        console.error('Error en registro devoluciones: ', error)
        return res.status(500).json({ message: "No se puede crear el registro de devolucion."})
    }
}