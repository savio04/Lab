import pg from 'pg'

const client = new pg.Pool({
	user: 'postgres',
	host: 'localhost',
	database:'Tasks_db',
	password: '5av100404',
	port: '5434',
})

const db = {
	query:(text:string,params:string) => {
		return client.query(text,params)
	},
}

export default db
