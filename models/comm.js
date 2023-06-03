const mongoose =require("mongoose");
const commSchema = new mongoose.Schema({
    id_comm:String,
    description:String,
    createdAt:Date,
    id_user:String,
    id_post:String    
    
},{
    timestamps : true
});
const comm = mongoose.model("comm",commSchema);
module.exports = comm;