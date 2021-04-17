import express from 'express'
import userRoute from './Users.route' 
import SinginRoute from './Singin.route'
const Routes = express.Router()



Routes.use('/create', userRoute)
Routes.use('/signin', SinginRoute)
export default Routes
