import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import { FailPage } from '../pages/ErrorRegister'
import { Home } from '../pages/Home'
import { Reports } from '../pages/Reports'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/*' element={<Navigate to='/' />}/>
            <Route path='errorRegister' element={<FailPage/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='reportes' element={<Reports/>}/>
        </Routes>
    )
}