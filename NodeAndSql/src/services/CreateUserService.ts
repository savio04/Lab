import db from '../config/db_config'
import {hash} from 'bcryptjs'

interface RequestProps{
	name:string
	email:string
	password:string
}

class CreateUserService{

	public async execute({name, email, password}:RequestProps){
	
		const emailAlreadyExisting = await db.query(
			'SELECT email FROM users WHERE email = $1',
			[`${email}`]
		)
		
		if(emailAlreadyExisting.rows[0]){
			throw new Error('Email already existing')
		}

		const passwordHash = await hash(password,10)

		const user = await db.query(
			'INSERT INTO users (name,email,password) VALUES($1,$2,$3) RETURNING id,name,email,creted_at',
			[`${name}`, `${email}`, `${passwordHash}`]
		)

		return user.rows[0]
	}

}


export default CreateUserService
