const mongoose= require('mongoose');

const foodSchema= new mongoose.Schema({
    id:Number,
    item_Name:String,
    category:String,
    description:String,
    nutritional_Information:String,
    serving_size: Number,
    allergens:String,
    ingredients:String,
    preparation_methods: String,
    certifications:String,
    countryOfOrigin:String,
    manufacturer: String,
    dietaryRestrictions: String,
    healthBenefits: String,
    bestPractices: String
});

const foodModel= new mongoose.model('FoodModel', foodSchema);
module.exports=foodModel;