const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGOOSE_URL).then(()=>console.log("Connect to DB")).catch(()=>console.log("Cann't connected"))

}

module.exports = connectToDb