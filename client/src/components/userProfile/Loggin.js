
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
<hr/>

<table style={tabSty}>
    <tbody>
<tr>
<td style={{padding:"10px"}}>Username:</td><td style={{padding:"10px"}}><input style={{width:'100%',height:'100%'}}  id='log_usname_input'></input></td>
</tr>
<tr>
<td style={{padding:"10px"}}>Password:</td><td style={{padding:"10px"}}><input style={{width:'100%',height:'100%'}} type="password" id='log_uspassword_input'></input></td>
</tr>

<tr>
<td style={{padding:"10px"}} colSpan={2}><button  style={{width:"100%"}} onClick={verifyLoggin}>Log in</button></td>
</tr>
<tr><td style={{padding:"10px"}} colSpan={2}>or loggin witd</td></tr>
<tr><td style={{padding:"10px"}} colSpan={2}></td></tr>

<tr><td style={{padding:"10px"}} colSpan={2}>if don't have account <span style={{color:'blue'}} onClick={()=>props.setProfileSectionPage('reg')}>sign up</span></td></tr>
</tbody>
</table>

</>
 
}

export default Loggin;



const tabSty={

   height:'250px',
   width:'100%',
    bordeRadius:"10px",
    border:'10px solid red'
}