require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const MONGO_URI=process.env.MONGO_URI
const PORT=process.env.PORT
const appRoutes = require("./routes/appRoutes")

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.method,req.path)
    next()
})

app.get("/",(req,res) =>{
    res.send("Mern University Management System Server!!..")
})

// Api Routes
app.use("/api/app", appRoutes)

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT,() => {
        console.log(`http://localhost:${PORT}`)
    })
})