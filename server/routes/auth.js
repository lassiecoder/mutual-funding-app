const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../middleware/requireLogin')

// router.get('/', (req, res) => {
//     res.send("hello authh")
// })

router.get('/protected', requireLogin, (req, res) => {
    res.send('hello i am middleware !!')
})

// SIGN UP ROUTER
router.post('/signup', (req, res) => {
    const {name, email, password} =req.body

    if(!name || !email || !password) {
        return res.status(422).json({ error: 'please fill all the fields' })
    } 

    // IN CASE USER ALREADY REGISTERED
    User.findOne({email:email})
    .then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({ error: 'this email is already exist!' })
        }

        bcrypt.hash(password, 12)
        .then(hashedpassword => {
            const user = new User({
                name,
                email,
                password: hashedpassword
            })
    
            user.save()
            .then(user => {
                res.json({ message: 'Sign up successfully!' })
            })
            .catch(err => {
                console.log(err);
            })
        })
    })
    .catch(err => {
        console.log(err);
    })
})

// SIGN IN ROUTER
router.post('/signin', (req, res) => {
    const {email, password} = req.body

    if(!email || !password) {
        res.status(422).json({ error: 'please add email or password' })
    }
    User.findOne({ email:email })
    .then(savedUser => {
        if(!savedUser) {
            res.status(422).json({ error: 'invalid email or password' })
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
            if(doMatch) {
                // res.json({ message: 'successfully signed in!' })
                // HERE 'lkuyevbklsdartegha' IS UDefined TOKEN 
                const token = jwt.sign({ _id: savedUser._id}, 'lkuyevbklsdartegha')
                const {_id, name, email} = savedUser
                res.json({token, user: {_id, name, email}})
            }
            else {
                return res.status(422).json({ error: 'invalid email or password' })
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
})

module.exports = router