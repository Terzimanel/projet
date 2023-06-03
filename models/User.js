const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    //id_user:String,
    name:String,
    email:String,
    password:String,
    role:String,
    enabled:Boolean,
    // createdAt:Date,
    // updatedAt:Date,
    // id_image:String

    
},{
    timestamps : true
});
const user = mongoose.model("user",userSchema);
module.exports = user;
