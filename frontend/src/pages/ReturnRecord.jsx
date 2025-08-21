import React from "react";
import { ReturnRecordForm } from "../components/Forms/ReturnRecordForm";
import { useCreateDevolution } from "../hooks/useCreateDevolucion";

export const ReturnRecord = () => {
    const { mutate, loading, err } = useCreateDevolution();
    const handleSubmit = async (values) => {
        try {
            await mutate(values);
            alert("Registro de devolución creado con éxito")
        } catch (error) {
            alert("No se pudo crear el registro. Revisa los datos e inténtalo de nuevo.")
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ReturnRecordForm onSubmit={handleSubmit} submitting={loading}/>
        </div>
    )
}