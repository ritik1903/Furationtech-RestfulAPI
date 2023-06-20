const mongoose  = require('mongoose');


//Creating the Schema
const itemSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : [true, "Please enter a item name"]
        },
        quantity : {
            type : Number,
            required : true,
            default : 0
        },
        price : {
            type : String,
            required : true,
        }, 
        image : {
            type : String,
            required : false,
        }
    },
    {
        timestamps : true
    }
)

const Item = mongoose.model('Item', itemSchema);


//Export the Schema
module.exports = Item;