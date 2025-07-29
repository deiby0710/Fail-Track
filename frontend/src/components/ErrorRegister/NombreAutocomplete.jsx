import { useRef, useEffect } from "react";

export const NombreAutocomple = ({usuarios, formData, onSelect }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (window.Awesomplete) {
            new Awesomplete(inputRef.current, {
                list: usuarios.map((u) => u.nombre),
                minChars: 1,
                autoFirst: true,
            });
        }
    }, [usuarios]);

    const handleChange = (e) => {
        const seleccionado = e.target.value;
        const usuario = usuarios.find((u) => u.nombre === seleccionado);
        if (usuario) {
        onSelect(usuario);
        }
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Escribe tu nombre..."
                onChange={handleChange}
            />
        </div>
    );
}