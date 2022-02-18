const mongoose =require('mongoose');
const db = process.env.DATABASE;
mongoose.connect(db,{
    userNewUrlParser :true,
    userUnifiedTopology:true
}).then(() =>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
})