import db from '../config/db_config'

interface RequestProps{
	name:string
	email:string
	password:string
}

class CreateUserService{

	public execute({name, email, password}:RequestProps){
	}

}


export default CreateUserService
