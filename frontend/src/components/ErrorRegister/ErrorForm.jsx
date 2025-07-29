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
        { id: 8, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 9, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 10, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 11, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 12, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 13, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 14, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 15, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 16, nombre: "Juali Costas", punto: "Punto Centro" },
        { id: 17, nombre: "Juali Costas", punto: "Punto Centro" }
    ];

    // Funcion: Enviar registrar error.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados al back end: ", formData)
    }

    const handleSelect = (nombre) => {
        console.log("Nombre elegido:", nombre);
        // podrías redirigir o almacenar en un context/state global
    }

    return (
        <form onSubmit={handleSubmit} className="text-start">
            <div className="row mb-3">
                <div className="col">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={handleChange} />
                    {/* <NombreAutocomple usuarios={usuariosMock} onSelect={handleSelect}/> */}
                </div>
                <div className="col">
                    <label className="form-label">Tipo de error</label>
                    <select className="form-select" name="tipoError" onChange={handleChange}>
                        <option value="" disabled selected> Seleccione una opción </option>
                        <option>Error 1</option>
                        <option>Error 2</option>
                        <option>Error 3</option>
                        <option>Error 4</option>
                    </select>
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
                        <option value="" disabled selected> Seleccione una opción </option>
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
                    <select className="form-select" name="eps" onChange={handleChange}>
                        <option value="" disabled selected> Seleccione una opción </option>
                        <option>EMSSANAR EPS SAS</option>
                        <option>MALLAMAS EPS</option>
                        <option>SANITAS EPS</option>
                        <option>ASMET SALUD EPS</option>
                        <option>SOS SALUD</option>
                    </select>
                </div>
            </div>

            <div className="text-center">
                <button className="btn btn-dark" type="submit">Registrar error</button>
            </div>
        </form>
    )
}