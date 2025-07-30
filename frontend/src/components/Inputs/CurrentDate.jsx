import React, { useState} from "react";

export const CurrentDate = ({ onChange }) => {
    const getToday =  () => {
        const today = new Date()
        return today.toISOString().split("T")[0]
    }

    const [fecha, setFecha] = useState(getToday());

    const handleChange = (e) => {
        setFecha(e.target.value)
        if(onChange) {
            onChange(e.target.value)
        }
    }
    return (
        <input 
        type="date" 
        className="form-control"
        value={fecha}
        onChange={handleChange}
        />
    )
}