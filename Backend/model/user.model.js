import {Schema,model} from "mongoose";
const userSchema=new Schema({
      username:{type:String, required:true},
      email:{type:String,unique:true, required:true},
      password:{type:String, required:true},
      phoneNo:{type:Number,required:true},
      address:{type:String,required:true}
})
const User=model("user",userSchema)
export default User