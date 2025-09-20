const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    
    
    const isUserExist = await userModel.findOne({username})
    if (isUserExist) {
        return res.status(409).json({
            message: "username already exist"
        })
    }
    const user = await userModel.create({
        username,
        password:await bcrypt.hash(password , 10)
    })

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires:new Date(Date.now()+1000*60*60*24*7)
    })

    res.status(201).json({
        message: "Register Sucessfully",
        user
    })
})


router.get('/user',async(req,res)=>{

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"unauthorized token not found"
        })
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id:decode.id
        }).select("-__v")

        res.status(200).json({
            message:"user data fatch sucessfully",
            user
        })
        
    } catch (error) {
        res.status(401).json({
            message:"unauthorised invalid token."
        })
    }

})

router.post('/login',async(req,res)=>{
    const {username,password} = req.body

    const user = await userModel.findOne({
        username
    })
    if(!user){
        return res.status(404).json({
            message:"Invalid Username"
        })
    }

    const ispassword = bcrypt.compare(password, user.password)
    

    if(!ispassword){
        return res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token,{
        expires: new Date(Date.now() + 1000*60*60*24*7)
    })

    res.status(202).json({
        message:"user login sucessfully"
    })
})

router.get('/logout',(req,res)=>{
    res.clearCookie("token")

    res.status(200).json({
        message:"log-out sucessfully"
    })
})


module.exports = router