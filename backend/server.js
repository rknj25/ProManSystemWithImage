import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';
import cors from 'cors';
dotenv.config()
import userRoute from './routes/useRoutes.js'
import proRoute from './routes/proRoutes.js';

const port=process.env.port;

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use('/uploads',express.static("uploads"));
app.use('/api/auth',userRoute);
app.use('/api/pro',proRoute);
dbConnect();
app.listen(port,()=>{
    console.log(`server started at:- ${port}`);
    
})