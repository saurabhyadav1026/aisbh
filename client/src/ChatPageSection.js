import { useCallback, useEffect, useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import { getChat,getChatList,getIsReloade } from "./components/userProfile/users";
export const ChatPageSection = (props) => {






  const [activeChat, setActiveChat] = useState({username:null,name:null});

  const [chatsList, setChatList] = useState([]);

  const [chat, setchat] = useState([]);

  const [isReloade,setIsReloade]=useState(false);

  useEffect(()=>{
const reloadeInterval=setInterval(async()=>{
 const  is_reloade=await getIsReloade(props.activeUser);
 if(!(isReloade===is_reloade)) setIsReloade(is_reloade)
},1000)
    return ()=>clearInterval(reloadeInterval)
  },[isReloade,props.activeUser])





  const updateChatChatList = useCallback(async () => {
    let c = await getChat(props.activeUser, activeChat.username);
     let c_list = await getChatList(props.activeUser);
    setchat(c)
    setChatList(c_list);
   
  },[props.activeUser,activeChat])


useEffect(()=>{
updateChatChatList();
},[updateChatChatList])



  useEffect(() => {
 //   const updateChatChatList = setInterval(async () => {
       const updateChatChatList = async () => {
    let c = await getChat(props.activeUser, activeChat.username);
     let c_list = await getChatList(props.activeUser);
    setchat(c)
    setChatList(c_list);
   
  } //,1000)
    updateChatChatList();
  return;// ()=>clearInterval(updateChatChatList);
  
  }, [activeChat, props.activeUser]);







  return (

    <>
      <LeftNav chatsList={chatsList} activeUser={props.activeUser} setPage={props.setPage} setActiveChat={setActiveChat} ></LeftNav>
      <div id="main_page">
        <TopNav activeChat={activeChat.name}></TopNav>
        <ChatPage chat={chat} activeChat={activeChat.username} activeUser={props.activeUser}></ChatPage>

        <InputBar updateChatChatList={updateChatChatList} activeChat={activeChat.username} activeUser={props.activeUser} ></InputBar>


      </div>

    </>

  );
}
export default ChatPageSection
  ;



