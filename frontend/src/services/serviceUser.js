import { api } from "../api/axiosConfig";

export const getUsersNameSede = async() => {
    try {
        const response = await api.get('api/Users/NamePunto')
        return response.data
    } catch(error) {
        console.error('Error en el servicio de createRegistroErrores: ', error);
        throw error;
    }
}