import { adminRouter } from './admin/admin-router'
import { clientRouter } from './client/client-router'
import express from 'express'

const appRoutes = express()

appRoutes.use('/users', clientRouter)

appRoutes.use('/admin', adminRouter)

export default appRoutes
