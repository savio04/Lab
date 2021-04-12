import express from 'express'
const userRoute = express.Router()


userRoute.post('/',(request,response) => {
	const {name,email,password} = request.body



	return response.status(200).send()
})
export default userRoute
