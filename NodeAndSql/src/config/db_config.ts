import pg from 'pg'
import * as dotenv from "dotenv";

if(process.env.PG_USER !== 'production'){
	dotenv.config()
}


const client = new pg.Pool({
	user: process.env.PG_USER,
	host: 'localhost',
	database:'Tasks_db',
	password:process.env.PG_PASSWORD,
	port: 5434,
})

const db = {
	query:(text:string,values:string[]) => {
		return client.query(text,values)
	},
}

export default db
