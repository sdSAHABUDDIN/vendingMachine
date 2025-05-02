import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import {machineRouter} from "./routes/machineRoutes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/machine',machineRouter)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
  connectDB();
});
