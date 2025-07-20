
import Profile from './account/Profile';
import Logo from './bot_logo/Logo';
import NewChat from './new_chat/NewChat';
import History from './history/History';
import OtherSetting from './other/Settings';




const LeftNav=(props)=>{


return (
<>

<div id="left_nav">

<Logo></Logo> 
<Profile></Profile>
<NewChat  createNewChat={props.createNewChat}></NewChat>
<History setActiveChat={props.setActiveChat} chats={props.chats} clearChats={props.clearChats}></History>
<OtherSetting></OtherSetting>


</div>

</>
);

}

export default LeftNav;