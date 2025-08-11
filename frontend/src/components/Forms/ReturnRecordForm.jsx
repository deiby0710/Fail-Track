import React, { useState } from "react";

export const ReturnRecordForm = () => {
    const [formData, setFormData] = useState({
        fechaEnvio: '',
        fechaDevolucion: '',
        numeroFactura: '',
        punto: '',
        tipoContrato: '',
        facturaNueva: '',
        modalidad: ''
    });

    const handleChange =  (e) => {
        const  { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className="pt-4 pb-4 ps-4 pe-4 border border-2 text-center rounded-3 bg-white shadow" style={{ minWidth: '800px' }}>
            <h1>Registro De Devoluciones</h1>
            <form className="text-start" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Fecha Envío</label>
                        <input type="date" name="fechaEnvio" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label className="form-label">Fecha Devolución</label>
                        <input type="date" name="fechaDevolucion" className="form-control" onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Número de Factura</label>
                        <input type="text" className="form-control" name="numeroFactura" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label className="form-label">Punto</label>
                        <input type="text" name="punto" className="form-control" onChange={handleChange}/>
                    </div>
                </div>
                
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Tipo Contrato </label>
                        <input type="text" name="tipoContrato " className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label className="form-label">Factura Nueva</label>
                        <input type="text" name="facturaNueva" className="form-control"  onChange={handleChange}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Modalidad</label>
                        <input type="text" className="form-control" name="modalidad" onChange={handleChange}/>
                    </div>
                    <div className="col d-flex justify-content-center align-items-end">
                        <button className="btn btn-dark">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}