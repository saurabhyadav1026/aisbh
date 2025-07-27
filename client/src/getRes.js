


const getRes=(req,isOnline)=>{

    const responser=isOnline;
   
let rrr= fetch(process.env.REACT_APP_API_KEY+'/sbh/'+responser+'?reqq='+req||"")
.then(response => response.json())
.then(data => {
    return data.sbh;
    })
    .catch(error => console.error('Error:', error));
    
    return rrr;


}




export default getRes;