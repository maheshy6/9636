import { Router } from "express";
import { addOrder } from "../controller/order.controller.js";

const orderRoute = Router()
orderRoute.post("/",addOrder)

export default orderRoute