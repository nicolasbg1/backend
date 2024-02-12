import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'

import { UnauthorizedError } from '@/helpers/api-erros'

const prisma = new PrismaClient()

export const authAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body

  try {
    const admin = await prisma.admin.findUnique({ where: { email } })

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new UnauthorizedError('Credenciais inválidas')
    }

    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({ error: 'Não autorizado' })
  }
}
