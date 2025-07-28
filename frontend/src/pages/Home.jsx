import React from "react";
import RedirectBtn from "../components/Home/RedirectBtn";

export default function Home(){
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="pt-5 pb-4 ps-4 pe-4 border border-2 text-center rounded-3 bg-white shadow" style={{ maxWidth: '900px' }}>
                <h1>Fail Track</h1>
                <div className="d-flex flex-column">
                <RedirectBtn texto="Registro de errores" route="/errorRegister"/>
                <RedirectBtn texto="Registro de errores" route="/errorRegister"/>
                <RedirectBtn texto="Reportes" route="/errorRegister"/>
                </div>
            </div>
        </div>
    )
}