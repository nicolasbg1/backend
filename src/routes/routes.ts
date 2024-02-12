import { adminRouter } from '@/routes/admin/admin-router'
import { clientRouter } from '@/routes/client/client-router'
import express from 'express'

const appRoutes = express()

appRoutes.use('/users', clientRouter)

appRoutes.use('/admin', adminRouter)

export default appRoutes
