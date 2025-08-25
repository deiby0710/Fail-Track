import axios from "axios";
import { api } from "../api/axiosConfig";

export const createRegistroErrores = async () => {
    const mockRes = {
        nombre: "Deiby Alejandro Delgado",
        tipoError: "Mal codigicado",
        punto: "San Ignacio",
        modalidad: "Capita",
        fecha: "2024-11-06T00:00:00.000Z",
        eps: "SANITAS EPS"
    }
    try {
        const response = await api.post('api/registroErrores', mockRes)
        return response.data
    } catch (error) {
        console.error('Error en el servicio de createRegistroErrores: ', error);
        throw error;
    }
}