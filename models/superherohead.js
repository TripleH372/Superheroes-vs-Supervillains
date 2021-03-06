const mongoose=require("mongoose")
const Schema=mongoose.Schema

const SuperHeroHead =new Schema (
    {
        color: { type: color , required: true },
        shape: { type: String , required: true }, //Will use the toLowerCase and === operator //Will have a default shape
        hairtexture: { type: String, required: true}, //Will use the toLowerCase and === operator //Will have a default texture
        haircolor: { type: color, required: true}, //Will have a default color
    },
    { timestamps: true },
)

module.exports = mongoose.model("superheroes", SuperHeroHead);