  import express from 'express';
import  cors from 'cors';
import dotenv from 'dotenv'


import getBotRes from './controll/getBotRes.js';
import getGenRes from './controll/getGenRes.js';





 dotenv.config()


// middleware setup
const app=express();
app.use(cors());
app.use(express.json());





// middleware
app.get('/sbh/bot',(req,res)=>{
    res.json({sbh:getBotRes(req.query.reqq)})
})

 app.get('/sbh/genai',async (req,res)=>{
    
    console.log("hhh")
    res.json({sbh:await getGenRes(req.query.reqq)})
})


// start server 
const port=process.env.PORT || 5000;
app.listen(port)

