
import { verifyUser } from './users'









const Loggin=(props)=>{






    const verifyLoggin=async ()=>{


const usname_=document.getElementById('log_usname_input');
const uspassword_=document.getElementById('log_uspassword_input');
if(!await verifyUser(usname_.value,uspassword_.value)){
    alert("usernae or password is incorrect");
    return;
}
else{
    props.setActiveUser(usname_.value)
        alert("Loggin Successfully.")
props.setPage('ChatPageSection')
}

    }



return<>

<h2 style={{color:"blue"}}>Loggin Here...</h2>
<table style={tabSty}>
    <tbody>
        
<tr>
<td >Username:</td><td ><input placeholder='Enter Username...' style={{width:'100%',height:'30px'}}  id='log_usname_input'></input></td>
</tr>
<tr>
<td >Password:</td><td ><input placeholder='Enter Password...' style={{width:'100%',height:'30px'}} type="password" id='log_uspassword_input'></input></td>
</tr>

<tr>
<td  colSpan={2}><button  style={{width:"100%",height:"100%",backgroundColor:"green"}} onClick={verifyLoggin}>Log in</button></td>
</tr>
<tr  style={{display:'none'}}><td  colSpan={2}>or loggin witd</td></tr>
<tr  style={{display:'none'}}><td  colSpan={2}></td></tr>

</tbody>
</table>


<div  >if don't have account <span style={{color:'blue',margin:"3px"}} onClick={()=>props.setProfileSectionPage('reg')}>sign up</span></div>
<div  > click to <span style={{color:'blue',margin:"3px"}}onClick={()=>props.setPage('ChatPageSection')}>stay without loggin</span></div>


</>
 
}

export default Loggin;



const tabSty={
   height:'200px',
   padding:"10px",
   width:'100%',
    bordeRadius:"10px",
    borderTop:'3px solid gray',
     borderBottom:'3px solid gray'
}
