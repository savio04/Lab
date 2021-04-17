import express from 'express'
import AuthUserService from '../services/AuthUserService'
const SinginRoute = express.Router()

SinginRoute.post('/', async (request,response) => {
	const AuthUser = new AuthUserService
	const {email,password} = request.body

	try{
		const dataResponse = await AuthUser.execute({
			email,
			password
		})

		return response.status(200).json(dataResponse)

	}catch(err){
		return response.status(400).json({
			error: `${err.message}`
		})
	}
})


export default SinginRoute
