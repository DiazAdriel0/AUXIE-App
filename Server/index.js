require('dotenv').config()
const mongoose = require('mongoose')
const { DB_PASSWORD } = process.env

const connectionString = `mongodb+srv://AuxieAdminsUsername:${DB_PASSWORD}@cluster0.dlvfdkg.mongodb.net/?retryWrites=true&w=majority`

mongoose
	.connect(connectionString)
	.then(() => {
		console.log('Database Connected')
	})
	.catch(error => {
		console.error(error)
	})
