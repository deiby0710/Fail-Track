import React from "react";
import ErrorForm from "../components/ErrorForm";

export const FailPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="pt-5 pb-4 ps-4 pe-4 border border-2 text-center rounded-3 bg-white shadow" style={{ maxWidth: '900px' }}>
                <h1>Registro de errores</h1>
                <ErrorForm />
            </div>
        </div>
    )
}