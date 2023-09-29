// require express
const express= require('express');

const admin=require("./router/admin")
const product=require("./router/product")

const app= express()
app.use(express.json())

// require connectDB
const connectDB= require('./config/connectDB')

// connectDB
connectDB()

app.use("/admin" , admin)
app.use("/product" , product)
// lunch the server
const port= 5000;

app.listen(port, (error)=> {
    error? console.log(error)
    : console.log(`the server is running on port ${port}`)
})