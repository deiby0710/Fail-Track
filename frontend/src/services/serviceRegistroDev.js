import { api } from "../api/axiosConfig";

export const createRegistroDev = async (data) => {
    const requestBody = {
        "fechaEnvio": data.fechaEnvio,
        "fechaDevolucion": data.fechaDevolucion,
        "numFactura": data.numFactura,
        "punto": data.punto,
        "tipoContrato": data.tipoContrato,
        "facturaNueva": data.facturaNueva,
        "modalidad": data.modalidad
    };
    const mockRequestBody = {
        "fechaEnvio": "2024-11-06T00:00:00.000Z",
        "fechaDevolucion": "2024-11-06T00:00:00.000Z",
        "numFactura": "159753",
        "punto": "San Ignacio",
        "tipoContrato": "Tipo",
        "facturaNueva": "1569dei",
        "modalidad": "Capita"
    }
    try {
        const response = await api.post('api/registroDevoluciones', requestBody);
        return response.data
    } catch (error) {
        console.error('Error en el servicio de createRegistroDev: ', error);
        throw error;
    }
}