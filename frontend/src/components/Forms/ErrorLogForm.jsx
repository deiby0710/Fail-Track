import { useEffect, useState } from "react";
import { NombreAutocomplete } from "../Inputs/NombreAutocomplete";
import { CurrentDate } from "../Inputs/CurrentDate";
import { SelectOption } from "../Inputs/SelectOpcion";

export const ErrorLogForm = ({onSubmit, btnAvailable, users}) => {
    const [ formData, setFormData ] = useState({
        nombre: '',
        punto: '',
        fecha: new Date().toISOString().split("T")[0],
        tipoError: '',
        modalidad: '',
        eps: ''
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'nombre' && value === '') {
            setFormData((prev) => ({
                ...prev, 
                [name]: value,
                punto: ''
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value}))
        }
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await onSubmit(formData)
        if(response===true){
            setFormData({
                nombre: '',
                punto: '',
                fecha: new Date().toISOString().split("T")[0],
                tipoError: '',
                modalidad: '',
                eps: ''
            })
        }
    }

    return (
        <div className="pt-5 pb-4 ps-4 pe-4 border border-2 text-center rounded-3 bg-white shadow" style={{ minWidth: '800px' }}>
            <h1>Registro de errores</h1>
            <form onSubmit={handleSubmit} className="text-start">
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Nombre</label>
                        <NombreAutocomplete usuarios={users}
                            name="nombre"
                            value={formData.nombre || ""}
                            onChange={handleChange}
                            onSelect={(u) =>
                                setFormData(prev => ({ ...prev, nombre: u.nombre, punto: u.punto }))
                            }/>
                    </div>
                    <div className="col">
                        <label className="form-label">Tipo de error</label>
                        <SelectOption name="tipoError" value={formData.tipoError} onChange={handleChange}
                            options={["Error 1", "Error 2", "Error 3", "Error 4"]}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Punto</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="punto" 
                            value={formData.punto || ""} 
                            onChange={handleChange} 
                            disabled={true}
                            placeholder="Punto"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Modalidad</label>
                        <SelectOption name="modalidad" value={formData.modalidad} onChange={handleChange}
                            options={["CAPITA", "EVENTO"]}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Fecha</label>
                        <CurrentDate onChange={(nuevaFecha) => setFormData((prev) => ({ ...prev, fecha: nuevaFecha }))}/>
                    </div>
                    <div className="col">
                        <label className="form-label">EPS</label>
                        <SelectOption name="eps" value={formData.eps} onChange={handleChange}
                            options={["EMSSANAR EPS SAS", "MALLAMAS EPS", "SANITAS EPS", "ASMET SALUD EPS", "SOS SALUD"]}
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-dark" type="submit" disabled={btnAvailable}>Registrar error</button>
                </div>
            </form>
        </div>
    )
}