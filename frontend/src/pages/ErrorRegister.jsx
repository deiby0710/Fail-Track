import React from "react";
import { ErrorLogForm } from '../components/Forms/ErrorLogForm'
import { ReturnRecordForm } from "../components/Forms/ReturnRecordForm";

export const FailPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {/* <ErrorLogForm /> */}
            <ReturnRecordForm/>
        </div>
    )
}