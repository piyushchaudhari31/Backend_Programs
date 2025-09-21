const foodModel = require("../model/food.model");
const uploadImage = require("../service/food.service")
const {v4:uuidv4} = require('uuid')

async function addFood(req,res){
    const {name,price,category} = req.body
    const file = req.file

    const upload = await uploadImage(file.buffer,`${uuidv4()}`)
    console.log(upload.url);

    const food = await foodModel.create({
        image:upload.url,
        name,
        price,
        category
    })

    res.status(201).json({
        message:"Created Successfully",
        food
    })

}

async function getFood(req,res){
    const food = await foodModel.find()
    
    res.status(200).json({
        message:"fetch successfully",
        food
    })
    
}

async function deleteFood(req,res){

    const foodId = req.params._id

    const food = await foodModel.findByIdAndDelete({
        _id:foodId
    })
    
    res.status(200).json({
        message:"Deleted Successfully"
    })
}



module.exports = {addFood ,getFood,deleteFood}