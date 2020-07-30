const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { json } = require('express')
const PORT = 2020
require('dotenv').config()


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=> {
    console.log('mongodb connected!!');
})
mongoose.connection.on('error', (err)=> {
    console.log('error!!', err);
})


require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))


app.listen(PORT,() => {
    console.log('server is running on', PORT);
})