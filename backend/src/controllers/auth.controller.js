import { loginS } from "../service/auth.service.js";

export async function login(req, res) {
    const { username, password } = req.body

    console.log('Username: ', username)
    console.log('Password: ', password)

    if(!username){
        return res.status(400).json({error: 'Username es obligatorio'})
    }
    if(!password){
        return res.status(400).json({error: 'Contraseña es obligatoria'})
    }
    try {
        const { token, admin } = await loginS({username, password})
        res.json({
            message: 'Inicio de sesión exitoso',
            token,
            admin
        })
    } catch (error) {
        if (error.message === 'USUARIO_NO_ENCONTRADO') {
            return res.status(400).json({ error: 'Usuario no encontrado'})
        }
        if (error.message === 'PASSWORD_INCORRECTA') {
            return res.status(401).json({error: 'Contraseña incorrecta'})
        }
        console.error('Error en el login: ', error)
        res.status(500).json({ error: 'Error en el servidor.'})
    }
}