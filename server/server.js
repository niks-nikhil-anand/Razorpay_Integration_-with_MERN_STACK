import { app } from "./app.js";
import Razorpay from 'razorpay'


var instance = new Razorpay({
    key_id: 'process.env.RAZORPAY_API_KEY',
    key_secret: 'process.env.RAZORPAY_API_SECRET',
  });

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT ${process.env.PORT}`)
})