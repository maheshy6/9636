import { Router } from "express";
import { updateLocation } from "../controller/location.controller.js";
const locationRoute = Router()
locationRoute.post("/update",updateLocation)

export default locationRoute