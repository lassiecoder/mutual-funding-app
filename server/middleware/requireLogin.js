const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    const {authorization} = req.headers

    // authorization === Bearer <token>
    if(!authorization) {
        return res.status(401).json({ error: 'you must be logged in!' })
    }
    const token = authorization.replace('Bearer ','')
    jwt.verify(token, 'lkuyevbklsdartegha', (err, payload) => {
        if(err) {
            return res.status(401).json({ error: 'you must be logged in!' })
        }

        const {_id} = payload
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
        // next()
    })
}