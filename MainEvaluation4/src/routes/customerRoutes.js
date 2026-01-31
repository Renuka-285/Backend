

import express from 'express';
import { registerCustomer, deleteCustomer } from '../controllers/customerController.js';
import { validateCustomer } from '../validations/customerValidation.js';

const router = express.Router();

router.post('/register-customer', validateCustomer, registerCustomer);
router.delete('/delete-customer/:customerId', deleteCustomer);

export default router;
