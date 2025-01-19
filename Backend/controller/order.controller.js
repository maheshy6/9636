import Order from "../model/order.model.js";
const addOrder = async (req,res)=>{
    
    try {
      const userData = await Order(req.body)
      await userData.save()
      res.status(201).json({message:"Order placed successfully"})
    } 
    catch (error) {
      console.log(error.message)
      res.status(500).json({"error":error.message})
    }
}

export {addOrder}