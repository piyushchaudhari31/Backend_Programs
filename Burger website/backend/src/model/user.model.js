const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartItem:{type:Object,default:{}}
},{
    minimize:false,
    timestamps:new Date()
}
)

const userModel = mongoose.model("user",userSchema)

module.exports = userModel