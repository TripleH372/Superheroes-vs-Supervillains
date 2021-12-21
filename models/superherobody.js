const mongoose=require("mongoose")
const Schema=mongoose.Schema

const SuperHeroBody =new Schema (
    {
        color: { type: color , required: true },
        gender: { type: String , required: true }, //Will use the toLowerCase and === operator //Will have a default gender
        strength: { type: String, required: true}, //Will use the toLowerCase and === operator //Will have a default strength
    },
    { timestamps: true },
)

module.exports = mongoose.model("superheroes", SuperHeroBody);