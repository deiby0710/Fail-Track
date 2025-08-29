import { api } from "../api/axiosConfig";

export const createRegistroErrores = async (data) => {
    const mockRes = {
        nombre: "Deiby Alejandro Delgado",
        tipoError: "Mal codigicado",
        punto: "San Ignacio",
        modalidad: "Capita",
        fecha: "2024-11-06T00:00:00.000Z",
        eps: "SANITAS EPS"
    }
    const requestBody = {
        nombre: data.nombre,
        tipoError: data.tipoError,
        punto: data.punto,
        modalidad: data.modalidad,
        fecha: data.fecha,
        eps: data.eps
    }
    try {
        const response = await api.post('api/registroErrores', requestBody)
        return response.data
    } catch (error) {
        console.error('Error en el servicio de createRegistroErrores: ', error);
        throw error;
    }
}