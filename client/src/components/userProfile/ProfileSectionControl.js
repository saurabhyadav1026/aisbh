import { useState,useEffect } from "react";

import Loggin from "./Loggin";
import Register from "./Register";
import Profile from "./Profile";

const ProfileSectionControl=(props)=>{

   



const [profilePage,setProfileSectionPage]=useState('log');
useEffect(()=>{if(props.activeUser!=='sbhunk')setProfileSectionPage('profile')},[props.activeUser])

const logOut=()=>{

       props.setActiveUser('sbhunk')
        alert("logout successfully")
        props.setPage('ChatPageSection')
        

  

}


return<>


{profilePage==='log' && <Loggin  activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}
{profilePage==='reg'  && <Register   activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}
{profilePage==='profile'&& <Profile logOut={logOut}  activeUser={props.activeUser} setActiveUser={props.setActiveUser} setPage={props.setPage} setProfileSectionPage={setProfileSectionPage}/>}

</>


}


export default ProfileSectionControl;