import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
  mchineId:{
    type:String,
    required:true,
  },
  slotNumber:Number,
  phoneNumber:String,
  itemName:String,
  status:String,
  timestamp:{
    type:Date,
    default:Date.now
  }
})
const Order=mongoose.model('Order',machineSchema);

export default Order;