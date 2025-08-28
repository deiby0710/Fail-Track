import React from "react";
import { ReturnRecordForm } from "../components/Forms/ReturnRecordForm";
import { useCreateDevolution } from "../hooks/useCreateDevolucion";
import { timedAlert, defaultAlert } from '../utils/alert';

export const ReturnRecord = () => {
    const { mutate, loading, err } = useCreateDevolution();
    const handleSubmit = async (values) => {
        for (let clave in values) {
            if(!values[clave]) {
                defaultAlert('info','Faltan campos por registrar',`Digite: ${clave}`)
                return ;
            }
        }
        try {
            await mutate(values);
            timedAlert('success', `Registro de devolución creado con éxito`)
            return true;
        } catch (error) {
            timedAlert('error', `No se pudo crear el registro. Revisa los datos e inténtalo de nuevo.`)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ReturnRecordForm onSubmit={handleSubmit} btnAvailable={loading}/>
        </div>
    )
}