import { Router } from 'express'

import { AdminController } from '../../controller/admin-controller'
import { authAdmin } from '../../middlewares/auth'

const adminRouter = Router()
const adminController = new AdminController()

adminRouter.post('/login', authAdmin, adminController.login)

adminRouter.get('/appointments', adminController.getAllAppointments)
adminRouter.delete(
  '/appointments/:appointmentId',
  adminController.cancelAppointment,
)

export { adminRouter }
