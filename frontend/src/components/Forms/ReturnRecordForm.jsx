import React, { useState } from "react";

export const ReturnRecordForm = ({onSubmit, submitting}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const values = {
            fechaEnvio: fd.get("fechaEnvio") || "",
            fechaDevolucion: fd.get("fechaDevolucion") || "",
            numFactura: fd.get("numFactura") || "",
            punto: fd.get("punto") || "",
            tipoContrato: fd.get("tipoContrato") || "",
            facturaNueva: fd.get("facturaNueva") || "",
            modalidad: fd.get("modalidad") || ""
        };
        onSubmit?.(values);
    }
    return (
        <div className="pt-4 pb-4 ps-4 pe-4 border border-2 text-center rounded-3 bg-white shadow" style={{ minWidth: '800px' }}>
            <h1>Registro De Devoluciones</h1>
            <form className="text-start" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Fecha Envío</label>
                        <input type="date" name="fechaEnvio" className="form-control"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Fecha Devolución</label>
                        <input type="date" name="fechaDevolucion" className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Número de Factura</label>
                        <input type="text" className="form-control" name="numFactura"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Punto</label>
                        <input type="text" name="punto" className="form-control"/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Tipo Contrato </label>
                        <input type="text" name="tipoContrato" className="form-control"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Factura Nueva</label>
                        <input type="text" name="facturaNueva" className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Modalidad</label>
                        <input type="text" className="form-control" name="modalidad"/>
                    </div>
                    <div className="col d-flex justify-content-center align-items-end">
                        <button className="btn btn-dark">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}