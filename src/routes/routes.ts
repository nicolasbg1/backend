import express from 'express'
import { adminRouter } from '@/routes/admin/admin-router'
import { clientRouter } from '@/routes/client/client-router'

const appRoutes = express()

appRoutes.use('/users', clientRouter)

appRoutes.use('/admin', adminRouter)

export { appRoutes }
