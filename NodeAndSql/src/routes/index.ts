import express from 'express'
import userRoute from './Users.route' 
const Routes = express.Router()



Routes.use('/create', userRoute)

export default Routes
