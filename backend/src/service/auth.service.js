import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function loginS({username, password}) {
    // Validamos si el usuario existe
    const admin = await prisma.usuarios.findUnique({
        where:{username}
    });

    if (!admin){
        throw new Error('USUARIO_NO_ENCONTRADO')
    }
    // Comparamos password
    if (password !== admin.password){
        throw new Error("PASSWORD_INCORRECTA")
    }

    const token = jwt.sign(
        { id: admin.id, nombre: admin.nombre },
        process.env.JWT_SECRET,
        { expiresIn: '8h'}
    )

    return {
        token,
        admin: {
            id: admin.id,
            nombre: admin.nombre,
            usuario: admin.username
        }
    }
}