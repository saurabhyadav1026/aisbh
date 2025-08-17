
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
<h3>Loggin here...</h3>
<hr/>
<br/>
<div>
<span>Username:</span><input id='log_usname_input'></input>
</div>
<br/>
<br/>
<div>
<span>Password:</span><input type="password" id='log_uspassword_input'></input> 
</div>

<div>
<button onClick={verifyLoggin}>Log in</button>
</div>
<br/>
<br/>
<div>or loggin with<hr/></div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}><span>g</span><span>m</span><span>t</span></div>
<hr/>
<h5>if don't have account <span style={{color:'blue'}} onClick={()=>props.setProfileSectionPage('reg')}>sign up</span></h5>
</>
 
}

export default Loggin;