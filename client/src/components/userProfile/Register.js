
import { useState } from 'react';
import {addUser,checkIsUsernameAvailble,getOtp} from './users'



const Register=(props)=>{


const [isUsernameAvailble,setIsAvailbleUsername]=useState(false);

// {otp_code:54425,otp:123654}
const [OTP,setotp]=useState({otp_code:null,otp:null})
  

const [isReadOnly,setIsReadOnly]=useState(false)

const [User,setUser]=useState({name:"",username:"",userpassword:'', confirm_password:'',email:''})

const updateUser=(e)=>{
    const {name,value}=e.target;
    
setUser({...User,[name]:value})
}



const sendOtp=async ()=>{

    checkUsername();
if(!isUsernameAvailble){
    alert("Username is not availble. Try other username.")
    return;}
const new_otp= await getOtp(User.email);
if(new_otp.status==='ok'){
    setIsReadOnly(true)
    alert("We have send the otp on your register contact. otp code is : "+new_otp.otp_code);
    setotp(new_otp);
        document.getElementById('otp_verify_div').style='visibility:visible';
  }
  else {alert("Enetr correct mail id")}

    }


    const resendOtp=async()=>{
    const new_otp= await getOtp(User.email);
if(new_otp.status==='ok'){
    alert("We have resend the otp on your register contact. otp code is : "+new_otp.otp_code);
    setotp(new_otp);
       
  }
  else {alert("Enetr correct mail id")}

    }

    
    const edit=()=>{
document.getElementById("otp_input").value=""
        document.getElementById('otp_verify_div').style+='visibility:hidden';


    }


    const verifyRegisterDetail=async()=>{
        
if(!isUsernameAvailble){
    alert("Username is not availble. Try other username.")
    return;}
      const  otp_=document.getElementById("otp_input");
const      otp=otp_.value;
 otp_.value="";
 if(OTP.otp.toString()!==otp){    
    alert("incorrect OTP  "+otp);
    return;
 }
 else{

 await  addUser(User)



    props.setProfileSectionPage('log');
    alert("register successfully");
 }


    }
const checkUsername=async()=>{
 const isUA=await checkIsUsernameAvailble(User.username);
 if(User.username.trim()!==''&&isUA){
setIsAvailbleUsername(true);

 }
 else setIsAvailbleUsername(false);
 

}




return<>



<div>
    <h1>Register</h1>
</div>

<div>
    <span>Name</span><input name='name' onChange={updateUser} readOnly={isReadOnly}   value={User.name}  required />
</div>
<div>
    <span>Username</span><input name='username' onKeyUp={checkUsername} onChange={updateUser} readOnly={isReadOnly}   value={User.username} required /><button onClick={checkUsername}  style={{color:'blue'}}>check</button><UserNameAvailble value={isUsernameAvailble}></UserNameAvailble>
</div>
<div>
    <span>Password :</span><input name='userpassword' onChange={updateUser} readOnly={isReadOnly}  type="password" value={User.userpassword} required></input>
</div>
<div>
    <span>Confirm Password :</span><input name='confirm_password' onChange={updateUser} readOnly={isReadOnly}   type="password" value={User.confirm_password} required></input>
</div>
<div>
    <span>Email id :</span><input name='email' onChange={updateUser} readOnly={isReadOnly}   value={User.email} type='email' required></input>
</div>
<div>
    <button onClick={sendOtp}>Send OTP</button>
</div>


<div id='otp_verify_div' style={{backgroundColor:'red',visibility:'hidden',position:'absolute',height:"100%",width:'100%'}}>

<div><span>Enter OTP</span><input type='Number' id="otp_input" required /><span onClick={resendOtp} style={{color:"blue"}} >Resend OTP</span></div>
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