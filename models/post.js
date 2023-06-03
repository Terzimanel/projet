const mongoose =require("mongoose");
const postSchema = new mongoose.Schema({
    id_post:String,
    description:String,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date,
    id_user:String,
    id_image:String
    
},{
    timestamps : true
});
const post = mongoose.model("post",postSchema);
module.exports = post;