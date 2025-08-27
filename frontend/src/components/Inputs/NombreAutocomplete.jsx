import React, { useEffect, useMemo, useRef, useState } from "react";

// useRef: Referenciar elementos html.
// useMemo: memorizar valores

/**
 * NombreAutocomplete (Bootstrap)
 *
 * Autocomplete accesible para seleccionar un usuario por nombre.
 * - Filtra por coincidencia de substring (case/acentos-insensitive)
 * - Navegación con teclado (↑ ↓ Enter Esc)
 * - Clic fuera para cerrar
 * - Compatible con formularios controlados (value/onChange)
 * - Muestra el punto junto al nombre para distinguir duplicados
 *
 * Props esperadas:
 *   usuarios: Array<{ id: number|string, nombre: string, punto?: string }>
 *   name?: string               // name del input (por defecto "nombre")
 *   value: string               // valor controlado (ej: formData.nombre)
 *   onChange: (e) => void       // tu handleChange que actualiza formData
 *   onSelect?: (usuario) => void // callback al seleccionar (opcional)
 *   placeholder?: string
 *   maxResults?: number
 *
 * Uso dentro del formulario (ejemplo):
 * <NombreAutocomplete
 *   usuarios={usuariosMock}
 *   name="nombre"
 *   value={formData.nombre || ""}
 *   onChange={handleChange}
 *   onSelect={(u) => setFormData(prev => ({ ...prev, nombre: u.nombre, punto: u.punto }))}
 * />
 */
export const NombreAutocomplete = ({
    usuarios,
    name = "nombre",
    value, // Texto actual del input
    onChange, // Funcion cuando el texto del input cambia.
    onSelect, // Funcion que se ejecuta cuando seleccionas un usuario de la lista.
    placeholder = "Buscar nombre…",
    maxResults = 8,
    }) => {
        const [open, setOpen] = useState(false); // Lista de sugerencias visible 
        const [highlighted, setHighlighted] = useState(0); // Indice del usuario que se esta senalando 
        const rootRef = useRef(null); // Una referencia al div principal del componente para saber si el clic del usuario está dentro o fuera de él.
        const inputRef = useRef(null); //  Una referencia al input para poder interactuar con él directamente (por ejemplo, para darle el foco).
        const listboxId = useMemo(() => `listbox-${Math.random().toString(36).slice(2)}`,[ ]);
        // Crea un ID único para la lista de sugerencias. Esto es importante para la accesibilidad (para que la pantalla pueda leer la lista).
        
        // Normalize hace que: Angel y angel sean lo mismo
        const normalize = (s) =>
            (s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        const results = useMemo(() => {
            const q = normalize(value);
            if (!q) return usuarios.slice(0, maxResults);
            return usuarios
            .filter((u) => normalize(u.nombre).includes(q))
            .slice(0, maxResults);
        }, [value, usuarios, maxResults]);

  // Cerrar al hacer clic fuera
        useEffect(() => {
            const onClick = (e) => {
                if (!rootRef.current) return;
                if (!rootRef.current.contains(e.target)) setOpen(false);
            };
            document.addEventListener("mousedown", onClick);
            return () => document.removeEventListener("mousedown", onClick);
        }, []);

        const openIfAny = () => {
            if (results.length > 0 || (value || "").length > 0) setOpen(true);
        };

        const emitChange = (newValue) => {
            if (typeof onChange === "function") {
            onChange({ target: { name, value: newValue } });
            }
        };

        const handleSelect = (usuario) => {
            emitChange(usuario.nombre);
            setOpen(false);
            setHighlighted(0);
            if (typeof onSelect === "function") onSelect(usuario);
            // Mantener el foco en el input para UX
            requestAnimationFrame(() => inputRef.current?.focus());
        };

        const onKeyDown = (e) => {
            if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
            setOpen(true);
            return;
            }
            if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlighted((i) => (i + 1) % Math.max(results.length, 1));
            } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlighted((i) => (i - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1));
            } else if (e.key === "Enter") {
            if (open && results[highlighted]) {
                e.preventDefault();
                handleSelect(results[highlighted]);
            }
            } else if (e.key === "Escape") {
            setOpen(false);
            }
        };

        const renderHighlighted = (usuario) => {
            const nameText = usuario.nombre;
            const nName = normalize(nameText);
            const nQuery = normalize(value);
            if (!nQuery) return nameText;
            const start = nName.indexOf(nQuery);
            if (start === -1) return nameText;
            const end = start + nQuery.length;
        return (
        <span>
            {nameText.slice(0, start)}
            <mark>{nameText.slice(start, end)}</mark>
            {nameText.slice(end)}
        </span>
        );
    };

    return (
        <div ref={rootRef} className="position-relative">
        <div className="d-flex align-items-center gap-2">
            <input
            ref={inputRef}
            type="text"
            className="form-control"
            name={name}
            value={value}
            onChange={(e) => emitChange(e.target.value)}
            onFocus={openIfAny}
            onKeyDown={onKeyDown}
            autoComplete="off"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-autocomplete="list"
            placeholder={placeholder}
            />
            {value && (
            <button
                type="button"
                className="btn btn-light btn-sm"
                onClick={() => { emitChange(""); setOpen(false); setHighlighted(0); }}
                aria-label="Limpiar búsqueda"
            >
                Limpiar
            </button>
            )}
        </div>

        {open && (
            <ul
            id={listboxId}
            role="listbox"
            className="list-group position-absolute w-100 z-3 mt-1 shadow"
            style={{ maxHeight: 288, overflowY: "auto" }}
            >
            {results.length === 0 ? (
                <li className="list-group-item text-muted" aria-disabled>
                Sin resultados
                </li>
            ) : (
                results.map((u, idx) => (
                <li
                    key={u.id ?? `${u.nombre}-${idx}`}
                    role="option"
                    aria-selected={idx === highlighted}
                    className={`list-group-item list-group-item-action ${idx === highlighted ? "active" : ""}`}
                    onMouseEnter={() => setHighlighted(idx)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(u)}
                    style={{ cursor: "pointer" }}
                >
                    <div className="d-flex justify-content-between align-items-center">
                    <div>{renderHighlighted(u)}</div>
                    {u.punto && (
                        <span className="badge bg-secondary" title={u.punto}>{u.punto}</span>
                    )}
                    </div>
                </li>
                ))
            )}
            </ul>
        )}
        </div>
    );
}