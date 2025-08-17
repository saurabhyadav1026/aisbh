


const getRes=async(req)=>{


   const isOnline='bot'
    const responser=process.env.REACT_APP_API_KEY+'/sbh/'+isOnline+'?req='+req||"";
 

    try{

const response=await fetch(responser);
const data=await response.json();
return data.value;

    }
    catch(error){
        console.log(error);
    }



}




export default  getRes;