const express = require('express')
const foodModel = require('../model/food.model')
const multer = require('multer')
const {addFood, getFood, deleteFood, updateFood, getFoodById} = require('../controller/food.controller')
const router = express.Router()


const upload = multer({storage:multer.memoryStorage()})

router.post('/add',upload.single("image"),addFood)
router.get('/get',getFood)
router.delete('/delete/:_id',deleteFood)
router.patch('/update/:_id',upload.none(),updateFood)
router.get('/get/:id',getFoodById)



module.exports = router