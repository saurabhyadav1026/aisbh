
import Profile from './account/ProfileBar';
import Logo from './bot_logo/Logo';
import Chat from './chatbar/Chat';
import OtherSetting from './other/Settings';


const LeftNav=(props)=>{



return (
<>

<div id="left_nav" style={props.sty_lft} >

<Logo></Logo>
 <Profile isLoggin={props.isLoggin} activeUser={props.activeUser} setPage={props.setPage}></Profile>
<Chat  activeUser={props.activeUser} searchInput={props.searchInput} updateSearchInput={props.updateSearchInput}  chatsList={props.chatsList}  setActiveChat={props.setActiveChat}  clearChats={props.clearChats}></Chat>
<OtherSetting activeUser={props.activeUser} />


</div>

</>
);

}

export default LeftNav;