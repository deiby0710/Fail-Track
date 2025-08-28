import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import RegistroErrores from './src/routes/RouteRegistroErrores.js'
import RegistroDevoluciones from './src/routes/RouteRegistroDev.js'
import Users from './src/routes/RoutesUser.js'
import auth from './src/routes/auth.routes.js'
import { verifyToken } from './src/middlewares/verifyToken.js'

//cargamos las variables .env
dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/api', auth)
app.use('/api/registroErrores', verifyToken, RegistroErrores)
app.use('/api/RegistroDevoluciones', verifyToken, RegistroDevoluciones)
app.use('/api/Users', verifyToken, Users)


app.listen(port, () => {
    console.log(`Fail Track API escuchando en http://localhost:${port}`)
})