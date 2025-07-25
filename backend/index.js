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
    console.log("ssssbbbb"+getRess(req.query.reqq))
})



// start server 
app.listen(5000)

