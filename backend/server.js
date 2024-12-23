import express from 'express'
import dotenv from 'dotenv'
import users from './routes/users.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())



app.use('/api/users', users)



















app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
    })