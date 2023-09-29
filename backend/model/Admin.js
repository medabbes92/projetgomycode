// require mongoose
const mongoose= require('mongoose');

// require schema from mongoose
const Schema= mongoose.Schema;

// create the schema
const adminSchema= new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports= Admin= mongoose.model("Admin", adminSchema)

