require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const MONGO_URI=process.env.MONGO_URI
const PORT=process.env.PORT

app.use(cors())

app.get("/",(req,res) =>{
    res.send("Mern University Management System Server!!..")
})

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT,() => {
        console.log(`http://localhost:${PORT}`)
    })
})