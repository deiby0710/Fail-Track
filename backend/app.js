import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import RegistroErrores from './src/routes/RouteRegistroErrores.js'
import RegistroDevoluciones from './src/routes/RouteRegistroDev.js'

//cargamos las variables .env
dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/api/registroErrores', RegistroErrores)
app.use('/api/RegistroDevoluciones', RegistroDevoluciones)
app.get('/', (_, res) => res.json({ ok: true, name: 'Fail Track API' }))


app.listen(port, () => {
    console.log(`Fail Track API escuchando en http://localhost:${port}`)
})