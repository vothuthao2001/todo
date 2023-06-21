const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes/todoRoute.js');
require('dotenv').config()


const app = express()
const PORT = process.env.port || 8888

app.use(express.json()) //req.body get error message
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log(`connecting to MongoDB`)) 
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, ()=> console.log(`listening on port: ${PORT}`))
