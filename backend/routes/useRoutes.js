import express from 'express';
import { login, register } from '../controllers/userAuth.js';
const router=express.Router();

router.post('/sign',register)
router.post('/login',login)
export default router