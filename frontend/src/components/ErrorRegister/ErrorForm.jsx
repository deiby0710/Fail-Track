import { useState } from "react";

export const ErrorForm = () => {
    const [ formData, setFormData ] = useState({
        nombre: '',
        punto: '',
        fecha: '',
        tipoError: '',
        modalidad: '',
        eps: ''
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados al back end: ", formData)
    }

    return (
        <form onSubmit={handleSubmit} className="text-start">
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={handleChange} />
                </div>
                <div className="col">
                    <label className="form-label">Tipo de error</label>
                    <input type="text" className="form-control" name="tipoError" onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Punto</label>
                    <input type="text" className="form-control" name="punto" onChange={handleChange} />
                </div>
                <div className="col">
                    <label className="form-label">Modalidad</label>
                    <select className="form-select" name="modalidad" onChange={handleChange}>
                        <option>Cápita</option>
                        <option>Evento</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Fecha</label>
                    <input type="date" className="form-control" name="fecha" onChange={handleChange} />
                </div>
                <div className="col">
                    <label className="form-label">EPS</label>
                    <input type="text" className="form-control" name="eps" onChange={handleChange} />
                </div>
            </div>

            <div className="text-center">
                <button className="btn btn-dark" type="submit">Registrar error</button>
            </div>
        </form>
    )
}