


const getRes=(req,isOnline)=>{

    let temp_api=isOnline==='Online'?process.env.REACT_APP_API_KEY+'/sbh/genai?reqq='+req:process.env.REACT_APP_API_KEY+'/sbh/bot?reqq='+req
let rrr= fetch(temp_api||"")
.then(response => response.json())
.then(data => {
    return data.sbh;
    })
    .catch(error => console.error('Error:', error));
    
    return rrr;


}




export default getRes;