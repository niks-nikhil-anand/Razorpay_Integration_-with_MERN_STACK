import  express  from "express";
import paymentRoute from "./routes/paymentRoutes.js";


import { config } from "dotenv";

config({path:"./config/config.env"})


export const app = express()
app.use('/api', paymentRoute)

