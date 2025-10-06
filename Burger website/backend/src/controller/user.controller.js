const userModel = require("../model/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function registerUSer(req,res){

    const {name,email,password} = req.body

    const isemail = await userModel.findOne({
        email
    })

    if(isemail){
        res.status(401).json({
            message:"Already Exist"
        })
    }

    if(password.length<8){
        return res.status(400).json({
            message:"please Enter A Strong Password(8-digit)"
        })
    }
    const user = await userModel.create({
        name,
        email,
        password:await bcrypt.hash(password , 10)
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY)

    res.cookie("token",token)

    res.status(201).json({
        message:"Register Sucessfully",
        user
    })

}

async function loginUser(req,res){

    const {email,password} = req.body

    

    const isEmail = await userModel.findOne({email})

    if(!isEmail){
        return res.status(401).json({
            message:"Invalid Email"
        })
    }

    const isPassword = await bcrypt.compare(password,isEmail.password)

    
    if(!isPassword){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({id:isEmail._id},process.env.JWT_SECRET_KEY)
    

    

    res.status(200).json({

        message:"Login Successfully",
        token
    })

}

async function getUser(req,res){

    const token = req.cookies.token
    
    

    if(!token){
        return res.status(401).json({
            message:"Unathorized Person:Login First"
        })
    }

    try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

        const user = await userModel.findOne({
            _id:decoded.id
        })

        res.status(200).json({
            message:"fetch Successfully",
            user
        })
        
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized Person : Login Again"
        })
        
    }
}

async function logOutUser(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"log Out successfully"
    })

}


module.exports = {
    registerUSer,loginUser,getUser,logOutUser
}