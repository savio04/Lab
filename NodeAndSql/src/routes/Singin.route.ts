import express from 'express'
import AuthUserService from '../services/AuthUserService'
const SinginRoute = express.Router()

interface ResponseProps{
	id:string
	email:string
	password:string
	created_at:Date
}

SinginRoute.post('/', async (request,response) => {
	const AuthUser = new AuthUserService
	const {email,password} = request.body

	try{
		const user = await AuthUser.execute({
			email,
			password
		})

		return response.status(200).json(user)

	}catch(err){
		return response.status(400).json({
			error: `${err.message}`
		})
	}
})


export default SinginRoute
