import { useEffect, useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import { getChat } from "./components/userProfile/users";
import { getChatList } from "./components/userProfile/users";
export const ChatPageSection = (props) => {






  const [activeChat, setActiveChat] = useState(null);

  const [chatsList, setChatList] = useState([]);

  const [chat, setchat] = useState([]);





  const updateChatChatList = async () => {
    let c = await getChat(props.activeUser, activeChat);
     let c_list = await getChatList(props.activeUser);
    setchat(c)
    setChatList(c_list);
   
  }


  useEffect(() => {
    const updateChatChatList = async () => {
    let c = await getChat(props.activeUser, activeChat);
     let c_list = await getChatList(props.activeUser);
    setchat(c)
    setChatList(c_list);
   
  }
    updateChatChatList();
  
  }, [activeChat, props.activeUser]);







  return (

    <>
      <LeftNav chatsList={chatsList} activeUser={props.activeUser} setPage={props.setPage} setActiveChat={setActiveChat} ></LeftNav>
      <div id="main_page">
        <TopNav ></TopNav>
        <ChatPage chat={chat} activeChat={activeChat} activeUser={props.activeUser}></ChatPage>

        <InputBar updateChatChatList={updateChatChatList} activeChat={activeChat} activeUser={props.activeUser} ></InputBar>


      </div>

    </>

  );
}
export default ChatPageSection
  ;



