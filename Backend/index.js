import express from "express";
import "dotenv/config"
import mongoose from "mongoose";
import userRoute from "./router/user.router.js";
import cors from "cors"
import locationRoute from "./router/location.router.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/users",userRoute)
app.use("/api/location",locationRoute)
const port = process.env.PORT || 2020
app.listen(port, async()=>{
    await mongoose.connect(process.env.MONGODB_CLOUD_URL)
    console.log("connected to mongodb atlas")
    console.log(`server started at port http://localhost:${port}`)
})

