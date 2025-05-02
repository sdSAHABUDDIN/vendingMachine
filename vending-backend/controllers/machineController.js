import Machine from "../models/Machine"
export const  machineFind=async(req,res)=>{
  const machines=await Machine.find();
  res.json(machines);
}