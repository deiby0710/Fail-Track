import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../pages/Login'
import { FailPage } from '../pages/Fails'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/*' element={<Navigate to='/' />}/>
            <Route path='fail' element={<FailPage/>}/>
        </Routes>
    )
}