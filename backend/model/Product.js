// require mongoose
const mongoose= require('mongoose');

// require schema from mongoose
const Schema= mongoose.Schema;

// create the schema
const productSchema= new Schema({
    image: {
        type: String,
    },

    nom: {
        type: String,
        require: true
    },
    categorie: {
        type: String,
       
    },
    size: {
        type: String,
        
    },
    puissance: {
        type: String,
       
    },
    description: {
        type: String,
       
    }
})

module.exports= Product= mongoose.model("Product", productSchema)

