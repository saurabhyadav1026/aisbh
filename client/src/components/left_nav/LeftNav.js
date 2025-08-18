
import Profile from './account/ProfileBar';
import Logo from './bot_logo/Logo';
import NewChat from './new_chat/NewChat';
import History from './history/History';
import OtherSetting from './other/Settings';
import Friends from './friends/Friends';
import { useState } from 'react';



const LeftNav=(props)=>{



    
  

return (
<>

<div id="left_nav">

<Logo></Logo> 
<Profile isLoggin={props.isLoggin} activeUser={props.activeUser} setPage={props.setPage}></Profile>
<Friends  setActiveChat={props.setActiveChat} activeUser={props.activeUser}></Friends>
<NewChat   activeUser={props.activeUser} setActiveChat={props.setActiveChat} createNewAIChat={props.createNewAIChat}></NewChat>
<History chatsList={props.chatsList}  setActiveChat={props.setActiveChat}  clearChats={props.clearChats}></History>
<OtherSetting activeUser={props.activeUser} />


</div>

</>
);

}

export default LeftNav;