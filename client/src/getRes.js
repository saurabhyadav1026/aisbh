


const getRes=async(req,isOnline)=>{

    const responser=process.env.REACT_APP_API_KEY+'/sbh/'+isOnline+'?reqq='+req||"";
 

    try{

const response=await fetch(responser);
const data=await response.json();
return data.sbh;

    }
    catch(error){
        console.log(error);
    }



}




export default  getRes;