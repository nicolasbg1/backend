import { Router } from 'express'
import { ClientController } from '@/controller/client-controller'

const clientRouter = Router()
const clientController = new ClientController()

clientRouter.post('/appointments', clientController.createAppointment)
clientRouter.put(
  '/appointments/:appointmentId',
  clientController.rescheduleAppointment,
)
clientRouter.delete(
  '/appointments/:appointmentId',
  clientController.cancelAppointment,
)

export { clientRouter }
