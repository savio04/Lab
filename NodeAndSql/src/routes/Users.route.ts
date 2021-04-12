import express from 'express'
import CreateUserService from '../services/CreateUserService'
const userRoute = express.Router()


userRoute.post('/',async (request,response) => {
	const {name,email,password} = request.body
	const CreateUser = new CreateUserService

	try{
		const user = await CreateUser.execute({
			name,
			email,
			password
		})

		return response.status(201).json(user)

	}catch(err){
		return response.status(400).json({
			erro: `${err.message}`
		})
	}

})
export default userRoute
