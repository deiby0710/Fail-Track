import React from "react";

export const SelectOption = React.memo(({name, value, onChange, options}) => {
    return (
        <select className="form-select" name={name} value={value} onChange={onChange}>
            <option value="" disabled>Seleccione una opción</option>
            {options.map((opcion) => {
                return (
                    <option key={opcion} value={opcion}>
                        {opcion}
                    </option>
                )
            })}
        </select>
    )
})