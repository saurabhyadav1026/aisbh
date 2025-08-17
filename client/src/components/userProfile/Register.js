
import { useState } from 'react';
import {addUser,checkIsUsernameAvailble} from './users'



const Register=(props)=>{


const [isUsernameAvailble,setIsAvailbleUsername]=useState(false);

    const sendOtp=()=>{
alert("We have send the otp on your register contact");
        document.getElementById('otp_verify_div').style='visibility:visible';
     //   sendUserOpt()

    }


    const resendOtp=()=>{
        alert("We have resend the otp on your register contact");
         //   sendUserOpt()
    }

    
    const edit=()=>{
document.getElementById("otp_input").value=""
        document.getElementById('otp_verify_div').style+='visibility:hidden';


    }


    const verifyRegisterDetail=async()=>{
        checkUsername();
if(!isUsernameAvailble){
    alert("Username is not availble. Try other username.")
    return;}
      const  otp_=document.getElementById("otp_input");
const      otp=otp_.value;
 otp_.value="";
 if(!verifyOtp(otp)){
    alert("incorrect OTP");
    return;
 }
 else{

   const n=document.getElementById('name_input').value;
   const us=document.getElementById('us_input').value;
   const ps=document.getElementById('new_ps_input').value;
   const c=document.getElementById("contact_input").value;
    
 await  addUser(n,us,ps,c)



    props.setProfileSectionPage('log');
    alert("register successfully");
 }


    }

const verifyOtp=(otp)=>{
    return true;
}

const checkUsername=async()=>{
 const us=document.getElementById('us_input').value;
 const isUA=await checkIsUsernameAvailble(us);
 console.log(isUA)
 if(us.trim()!==''&&isUA){
setIsAvailbleUsername(true);
 }
 else setIsAvailbleUsername(false)
}




return<>



<div>
    <h1>Register</h1>
</div>

<div>
    <span>Name</span><input id='name_input'></input>
</div>
<div>
    <span>Username</span><input id="us_input"></input><button onClick={checkUsername}  style={{color:'blue'}}>check</button><UserNameAvailble value={isUsernameAvailble}></UserNameAvailble>
</div>
<div>
    <span>Password</span><input type="password" id='new_ps_input'></input>
</div>
<div>
    <span>Confirm Password</span><input type="password" id="ps_confirm_input"></input>
</div>
<div>
    <span>Phone Number/Email</span><input id="contact_input"></input>
</div>
<div>
    <button onClick={sendOtp}>Send OTP</button>
</div>


<div id='otp_verify_div' style={{backgroundColor:'red',visibility:'hidden',position:'absolute',height:"100%",width:'100%'}}>

<div><span>Enter OTP</span><input id="otp_input"></input><span onClick={resendOtp} style={{color:"blue"}} >Resend OTP</span></div>
<div><button id='otp_verify_btn' onClick={verifyRegisterDetail}>Register</button></div>
<div>To edit Email/ Contact no. <span onClick={edit} style={{color:'blue'}}>click here</span> </div>
<div></div>

</div>
<div><hr/>or loggin with<hr/></div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}><span>g</span><span>m</span><span>t</span></div>
<hr/>
<h5>if you have account <span style={{color:'blue'}} onClick={()=>props.setProfileSectionPage('log')}>sign in</span></h5>



</>    


}

export default Register;



const UserNameAvailble=(props)=>{
    if(props.value) return <span id="username_availble_status"style={{color:'green'}}>Availble</span>
    else return <span id="username_availble_status" style={{color:'red'}}>not Availble</span>
}