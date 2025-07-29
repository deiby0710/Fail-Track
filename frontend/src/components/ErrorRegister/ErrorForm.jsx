import { useState } from "react";
import { NombreAutocomple } from './NombreAutocomplete'

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

        // Funcion para traer los datos del Back end
    const usuariosMock = [
        { id: 1, nombre: "Juan Pérez", punto: "Punto Norte" },
        { id: 2, nombre: "Juana Gómez", punto: "Punto Centro" },
        { id: 3, nombre: "Carlos Ramírez", punto: "Punto Sur" },
        { id: 4, nombre: "Ana María Torres", punto: "Punto Norte" },
        { id: 5, nombre: "Luis Hernández", punto: "Punto Oriente" },
        { id: 6, nombre: "María José Rivas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 7, nombre: "Juali Costas", punto: "Punto Centro" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados al back end: ", formData)
    }

    const handleSelect = () => {

    }

    return (
        <form onSubmit={handleSubmit} className="text-start">
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Nombre</label>
                    {/* <input type="text" className="form-control" name="nombre" onChange={handleChange} /> */}
                    <NombreAutocomple usuarios={usuariosMock}/>
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