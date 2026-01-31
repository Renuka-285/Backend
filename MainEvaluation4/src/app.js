
import express from 'express';
import customerRoutes from './routes/customerRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

export default app;
