import mongoose from "mongoose";

const machineSchema=new mongoose.Schema({
  mchineId:{
    type:String,
    required:true,
    unique:true,
    },
  location:String,
  isOnline:Boolean
})
const Machine=mongoose.model('Machine',machineSchema);

export default Machine;