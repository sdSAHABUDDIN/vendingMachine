import mongoose from "mongoose";

const slotSchema=new mongoose.Schema({
  mchineId:{
    type:String,
    required:true,
  },
  slotNumber:Number,
  itemName:String,
  price:Number,
  quantity:Number,

});
const Slot=mongoose.model('Slot',machineSchema);

export default Slot;