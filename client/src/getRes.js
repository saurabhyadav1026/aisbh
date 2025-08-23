


const getRes=async(req)=>{


   const isOnline='gen'
    const responser=process.env.REACT_APP_API_KEY+'/sbh/'+isOnline+'?req='+req||"";
 

    try{

const response=await fetch(responser);
const data=await response.json();
console.log(data)
return data.value;

    }
    catch(error){
        console.log(error);
    }



}




export default  getRes;