const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGOOSE_URL).then(()=>console.log("✅ Connected TO DB")).catch(()=>console.log("🚫 error"))
}

module.exports = connectToDb