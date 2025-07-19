
import Profile from './account/Profile';
import Logo from './bot_logo/Logo';
import New_chat from './new_chat/NewChat';
import History from './history/History';
import Other_setting from './other/Settings';




const left_nav=(props)=>{


return (
<>

<div id="left_nav">

<Logo></Logo>
<Profile></Profile>
<New_chat seActiveChat={props.setActiveChat} chat_count={props.chat_count}></New_chat>
<History seActiveChat={props.setActiveChat} chat_count={props.chat_count}></History>
<Other_setting></Other_setting>


</div>

</>
);

}

export default left_nav;