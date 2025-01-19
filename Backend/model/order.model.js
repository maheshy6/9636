import {Schema,model} from "mongoose";
const orderSchema=new Schema({
      username:{type:String, required:true},
      email:{type:String,unique:true, required:true},
      password:{type:String, required:true},
      phoneNo:{type:Number,required:true},
      address:{type:String,required:true}
})
const Order=model("order",orderSchema)
export default Order