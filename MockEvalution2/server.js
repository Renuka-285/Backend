
import express from 'express';
import dotenv from 'dotenv';
import customerRoutes from './routes/customer.routes.js';
import orderRoutes from './routes/order.routes.js';


dotenv.config();
const app=express();
app.use(express.json());
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
})