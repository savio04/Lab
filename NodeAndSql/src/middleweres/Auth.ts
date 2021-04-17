import db from '../config/db_config'
import {Request,Response,NextFunction} from 'express' 

function authorizationUser(request:Request,response:Response,next:NextFunction){
	const {email,password} = request.body

	console.log(email,password)
}


export default authorizationUser
