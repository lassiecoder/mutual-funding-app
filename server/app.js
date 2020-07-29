const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { json } = require('express')
const PORT = 2020
// const {MONGOURI} = require('./keys')
// SK9fkiwutzvk3ybQv
// 'mongodb+srv://mutualfunding:mutualfunding84510@cluster0.s8oj9.mongodb.net/testdb?retryWrites=true&w=majority'


// i've created "testdb" as database name including collection name "users"
mongoose.connect('mongodb+srv://mutualfunding:mutualfunding84510@cluster0.s8oj9.mongodb.net/testdb?retryWrites=true&w=majority', {
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