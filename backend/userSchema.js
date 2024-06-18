const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    job: String,
    city: String,
    location:String,
    number:String
})
const User = mongoose.model('user', userSchema)
module.exports = User