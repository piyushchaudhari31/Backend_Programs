require('dotenv').config()
const app = require("./src/app");

app.listen(3000,()=>{
  console.log("✅ 3000 port is running");
})