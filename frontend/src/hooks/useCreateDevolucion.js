import { useState, useCallback } from "react";
import { createRegistroDev } from "../services/serviceRegistroDev";

export function useCreateDevolution() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = useCallback(async (values) => {
        try {
            setLoading(true);
            setError(null);

            const payload = {
                fechaEnvio: values.fechaEnvio,                  
                fechaDevolucion: values.fechaDevolucion || null,
                numFactura: values.numFactura,                  
                punto: values.punto,                            
                tipoContrato: values.tipoContrato,              
                facturaNueva: values.facturaNueva || null,      
                modalidad: values.modalidad                     
            };

            const data = await createRegistroDev(payload);

            return data
        } catch (error) {
            setError(error);
            throw error
        } finally {
            setLoading(false);
        }
    }, []);

    return {mutate, loading, error}
}