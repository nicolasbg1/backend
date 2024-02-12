import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { env } from '../config/environment'
import { UnauthorizedError } from '../helpers/api-erros'

const prisma = new PrismaClient()

export class AdminController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const admin = await prisma.admin.findUnique({ where: { email } })

      if (!admin || !(await bcrypt.compare(password, admin.password))) {
        throw new UnauthorizedError('Credenciais inválidas')
      }

      const token = jwt.sign({ id: admin.id }, env.JWT_PASS, {
        expiresIn: '1h',
      })

      return res.json({ token })
    } catch (error) {
      console.error(error)
      throw new UnauthorizedError('Erro ao realizar o login')
    }
  }

  getAllAppointments = async (req: Request, res: Response) => {
    try {
      const appointments = await prisma.appointment.findMany({
        include: {
          client: true,
          service: true,
          employee: true,
        },
      })
      return res.json(appointments)
    } catch (error) {
      console.error(error)
      throw new UnauthorizedError('Erro ao obter agendamentos')
    }
  }

  cancelAppointment = async (req: Request, res: Response) => {
    const { appointmentId } = req.params

    try {
      await prisma.appointment.delete({
        where: { id: parseInt(appointmentId) },
      })

      return res.json({ message: 'Agendamento cancelado com sucesso' })
    } catch (error) {
      console.error(error)
      throw new UnauthorizedError('Erro ao cancelar agendamento')
    }
  }
}
