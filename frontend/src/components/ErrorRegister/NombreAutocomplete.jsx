import { useState, useEffect } from "react";

export const NombreAutocomple = ({usuarios, formData, onSelect }) => {
    const [busqueda, setBusqueda] = useState('');
    const [sugerencias, setSugerencias] = useState([]);

    // Cuando cambie  el valor del input Filtramos
    useEffect(() => {
        if (busqueda.trim() === '') {
            setSugerencias([]);
            return;
        }

        const filtrados = usuarios.filter((u) => 
            u.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        setSugerencias(filtrados)
    }, [busqueda, usuarios]);

    const handleSelect = (usuario) => {
        console.log(usuario)
        // setBusqueda(usuario.nombre);
        // setSugerencias([]);
        // onSelect(usuario);
    }

    return (
        <div>
            <input
                type="text"
                className="form-control"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {sugerencias.length > 0 && (
                <ul className="list-group mt-2">
                {sugerencias.map((usuario) => (
                    <li
                    key={usuario.id}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelect(usuario)}
                    >
                    {usuario.nombre} – {usuario.punto}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}