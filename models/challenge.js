const mongoose =require("mongoose");
const challengeSchema = new mongoose.Schema({
    id_challenge:String,
    name:String,
    date_debut:Date,
    date_fin:Date,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date,
    id_image:String,
    id_image:String,
    id_user:string

    
},{
    timestamps : true
});
const challenge = mongoose.model("challenge",challengeSchema);
module.exports = challenge;