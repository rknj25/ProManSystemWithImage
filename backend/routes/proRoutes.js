import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import { createProduct, getData,deleteData,updateData } from '../controllers/proAuth.js';

const router=express.Router();
router.post('/',upload.single("image"),createProduct);
router.get('/getdata',getData);
router.delete('/delete/:id',deleteData);
router.put("/update/:id", upload.single("image"), updateData);

export default router;























