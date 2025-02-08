import mssql from 'mssql';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const sqlConfig = {
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME,
	server: 'ADMINPC',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
		trustServerCertificate: true, // change to true for local dev / self-signed certs
	},
};

// HIVI NDIO UTAKUWA UNAEXECUTE HIZO PROCEDURES KWA CODE
//REMOVE THIS CODE HAPA AFTER FINDING WHERE YOU NEED TO USE IT AMA JUST COMMENT IT
//OFCOURSE FUNCTION NAME ITACHANGE

async function run() {
	let pool = await mssql.connect(sqlConfig);
	let users = (await pool.request().execute('A CERTAIN STORED PROCEDURE')).recordset;
	let parcels = (await pool.request().execute('A CERTAIN STORED PROCEDURE')).recordset;
	console.log(users);
	console.log(parcels);
}

run();
