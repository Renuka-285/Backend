
import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

import {
  validateCreateUser,
  validateUserId
} from '../middlewares/validateUser.js';

const router = express.Router();

router.post('/', validateCreateUser, createUser);
router.get('/get', getUsers);
router.get('/:id', validateUserId, getUserById);
router.put('/:id', validateUserId, updateUser);
router.delete('/:id', validateUserId, deleteUser);

export default router;
