import {sign} from 'jsonwebtoken'
import db from '../config/db_config'
import { compare } from 'bcryptjs'

interface RequestProps{
	email:string
	password:string
}

class AuthUserService{

	public async execute({email,password}:RequestProps){
		const user = await db.query('SELECT * FROM users WHERE email = $1',
				[`${email}`]
		) 

		if(!user.rows[0]){
			throw new Error('Email/password not exisiting')
		}

		const passwordCompare = await compare(password,user.rows[0].password)

		if(!passwordCompare){
			throw new Error('Email/password not existing')
		}

		return {user: user.rows[0],token:'teste'}
	}
}


export default AuthUserService
