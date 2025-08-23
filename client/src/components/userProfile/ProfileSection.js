
import { useState,useEffect } from "react";

import Loggin from "./Loggin";
import Register from "./Register";
import Profile from "./Profile";

const ProfileSection=(props)=>{


    


  const sty1={
height:'100%',
width:'100%',
backgroundColor:'black',
display:'flex', 
position:'fixed', 
alignItems:'center',
justifyContent:'center',
flexDirection:'column'
    }



const [profilePage,setProfileSectionPage]=useState('log');
useEffect(()=>{if(props.activeUser!=='sbhunk')setProfileSectionPage('profile')},[props.activeUser])

const logOut=()=>{

       props.setActiveUser('sbhunk')
        alert("logout successfully")
        props.setPage('ChatPageSection')
        

  

}









return <div id="profile_section" style={sty1}>

<div style={{display:"block",position:'fixed',top:'5%',right:'5%'}}><h1 onClick={()=>props.setPage('ChatPageSection')} style={{color:'white'}}>X</h1></div>
<div style={sty2}>

{profilePage==='log' && <Loggin  activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}
{profilePage==='reg'  && <Register   activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}
{profilePage==='profile'&& <Profile logOut={logOut}  activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}



</div>
</div>


}

export default ProfileSection;





const sty2={

    height:'100%',
width:'450px',
backgroundColor:'white',
padding:'30px',
display:"flex",
justifyContent:"center",
flexDirection:'column',
alignItems:'center'

}
