import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectBtn({texto, route}) {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(route)
    }
    return (
        <button className="btn btn-dark m-2" onClick={handleButton}>
            {texto}
        </button>
    )
}