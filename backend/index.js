const  express =require( 'express');
const  cors=require('cors')
const getRess=require('./controll/resses')



// middleware setup
const app=express();
app.use(cors());
app.use(express.json());





// middleware
app.get('/api/sbh',(req,res)=>{
    res.json({sbh:getRess(req.query.reqq)})
})



// start server 
const port=process.env.PORT || 5000;
app.listen(port)

