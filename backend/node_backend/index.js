  import express from 'express';
import  cors from 'cors';
import dotenv from 'dotenv'



import usersRout from './users/usersRout.js'
import connectDB from './db/db.js';
import getGenRes from './controll/getGenRes.js'





 dotenv.config()


// middleware setup
const app=express();
app.use(cors());
app.use(express.json());
await connectDB(); 

// middleware





app.use('/users',usersRout)

app.get('/sbh/gen',(req,res)=>{
  res.json({value:getGenRes(req.query.req)})
})




// start server 
const port=process.env.PORT || 5000;
app.listen(port)
