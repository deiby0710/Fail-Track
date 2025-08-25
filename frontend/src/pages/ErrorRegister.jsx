import React from "react";
import { ErrorLogForm } from '../components/Forms/ErrorLogForm'
import { useCreateError } from "../hooks/useCreateError";

export const FailPage = () => {
    const {apiResponse, loading, error} = useCreateError();
    const handleSubmit = async (values) => {
        try {
            await apiResponse(values);
            alert('Error creado con exito.')
        } catch (err) {
            alert("No se pudo crear el registro. Revisa los datos e inténtalo de nuevo.")
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ErrorLogForm onSubmit={handleSubmit} btnAvailable={loading}/>
        </div>
    )
}