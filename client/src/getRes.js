


const getRes=(req)=>{
let rrr= fetch('http://localhost:5000/api/sbh?reqq='+req)
.then(response => response.json())
.then(data => {
    return data.sbh;
    })
    .catch(error => console.error('Error:', error));
    
  console.log("rrr= "+rrr)
    return rrr;


}




export default getRes;