import { useState, useCallback } from "react";
import { createRegistroErrores } from "../services/serviceRegistroErrores";

export function useCreateError() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiResponse = useCallback(async (values) => {
        try {
            setLoading(true)
            setError(null)

            const data = {
                nombre: values.nombre,
                tipoError: values.tipoError,
                punto: values.punto,
                modalidad: values.modalidad,
                fecha: values.fecha,
                eps: values.eps
            }

            const response = await createRegistroErrores(data)

            console.log(response)

            return response
        } catch (error) {
            setError(error)
            throw error
        } finally {
            setLoading(false)
        }
    }, []);

    return {apiResponse, loading, error}
}