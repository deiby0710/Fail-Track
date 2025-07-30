import React from "react";

export const Reports = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="rounded bg-white d-flex flex-column p-5">
                <h1 className="mb-4">Reportes</h1>
                <button className="btn btn-dark m-2">Reporte Mensual</button>
                <button className="btn btn-dark m-2">Reporte Completo</button>
                <button className="btn btn-dark m-2">Reporte Dia</button>
            </div>
        </div>
    )
}