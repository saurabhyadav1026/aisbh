
import Profile from './account/ProfileBar';
import Logo from './bot_logo/Logo';
import NewChat from './new_chat/NewChat';
import Chat from './chatbar/Chat';
import OtherSetting from './other/Settings';


const LeftNav=(props)=>{



return (
<>

<div id="left_nav" style={props.sty_lft} >

<Logo></Logo>
 <Profile isLoggin={props.isLoggin} activeUser={props.activeUser} setPage={props.setPage}></Profile>
<NewChat  activeChat={props.activeChat}  activeUser={props.activeUser} setActiveChat={props.setActiveChat} createNewAIChat={props.createNewAIChat}></NewChat>
<Chat chatsList={props.chatsList}  setActiveChat={props.setActiveChat}  clearChats={props.clearChats}></Chat>
<OtherSetting activeUser={props.activeUser} />


</div>

</>
);

}

export default LeftNav;