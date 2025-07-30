import { useRef, useEffect } from "react";

export const NombreAutocomple = ({usuarios, setFormData, onSelect }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (window.Awesomplete) {
            new Awesomplete(inputRef.current, {
                list: usuarios.map((u) => ({ label: u.nombre, value: u })),
                minChars: 1,
                autoFirst: true,
                replace:function (selected) {
                    const usuario = selected.value;
                    inputRef.current.value = usuario.nombre
                    setFormData((prev) => ({
                        ...prev,
                        nombre: usuario.nombre,
                        punto: usuario.punto
                    }))
                }
            });
        }
    }, [usuarios]);

    const handleChange = (e) => {
        const seleccionado = e.target.value;
        const usuario = usuarios.find((u) => u.nombre === seleccionado);
        console.log(seleccionado)
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