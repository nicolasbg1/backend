import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { BadRequestError } from '@/helpers/api-erros'

const prisma = new PrismaClient()

export class ClientController {
  createAppointment = async (req: Request, res: Response) => {
    const { clientId, serviceId, employeeId, date, time } = req.body

    try {
      const appointment = await prisma.appointment.create({
        data: {
          clientId,
          serviceId,
          employeeId,
          date,
          time,
        },
      })
      return res.status(201).json(appointment)
    } catch (error) {
      console.error(error)
      throw new BadRequestError('Erro ao criar agendamento')
    }
  }

  rescheduleAppointment = async (req: Request, res: Response) => {
    const { appointmentId, newDate, newTime } = req.body

    try {
      const updatedAppointment = await prisma.appointment.update({
        where: { id: appointmentId },
        data: { date: newDate, time: newTime },
      })

      return res.json(updatedAppointment)
    } catch (error) {
      console.error(error)
      throw new BadRequestError('Erro ao remarcar agendamento')
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
      throw new BadRequestError('Erro ao cancelar agendamento')
    }
  }
}
