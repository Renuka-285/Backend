
import express from 'express';
import {
  createOrder,
  getCustomerOrders,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js';

import { validateOrder } from '../validations/orderValidation.js';

const router = express.Router();

router.post('/add-order', validateOrder, createOrder);
router.get('/get-my-orders/:customerId', getCustomerOrders);
router.put('/update-order/:orderId', updateOrder);
router.delete('/delete-order/:orderId', deleteOrder);

export default router;
