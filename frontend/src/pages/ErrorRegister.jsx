import { useEffect, useState } from 'react';
import { ErrorLogForm } from '../components/Forms/ErrorLogForm'
import { useCreateError } from "../hooks/useCreateError";
import { getUsersNameSede } from '../services/serviceUser';
import { timedAlert, defaultAlert } from '../utils/alert';

export const FailPage = () => {
    const {apiResponse, loading, error} = useCreateError();
    const [users, setUsers] = useState([])

    useEffect(()=>{
        (async ()=> {
            const res = await getUsersNameSede();
            setUsers(res)
        })();
    }, []);
    const handleSubmit = async (values) => {
        try {
            for (let clave in values) {
                if(!values[clave]) {
                    defaultAlert('info','Faltan campos por registrar',`Digite: ${clave}`)
                    return ;
                }
            }
            await apiResponse(values);
            timedAlert('success', `Registro creado con exito.`)
        } catch (err) {
            timedAlert('error', `No se pudo crear el registro`)
            console.error("El  error viene de  ErrorRegister: ",err)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <ErrorLogForm onSubmit={handleSubmit} btnAvailable={loading} users={users}/>
        </div>
    )
}