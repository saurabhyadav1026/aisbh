import { useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import getRes from "./getRes";

export const App = () => {


  // set old chats at usestate intilization
  const old_chat = []
  try {

    const temp = localStorage.getItem("sbh_chats")

    JSON.parse(temp).forEach(c => {
      old_chat.push(c)
    });


  }
  catch (e) {


    // if there is no any local storage chat
  }


  const [chats, setChats] = useState(old_chat);
  const [active_chat, setActiveChat] = useState(chats.length);
  const [isOnline,updateOnline]=useState('genai')



  const createNewChat = () => {

    if (chats[chats.length - 1].reqs.length === 0) return;
    setActiveChat([...chats].length)

  }



  // to add req and res in the chats list
  const setReqRes = (req, reqk) => {

    let temp_chats = [...chats];
    if (chats.length === active_chat) temp_chats.push({ id: "ch_" + chats.length, reqs: [], ress: [] });

    temp_chats[active_chat].reqs.push(req);
    temp_chats[active_chat].ress.push(getRes(reqk,isOnline));


    setChats(temp_chats);

    localStorage.setItem("sbh_chats", JSON.stringify(temp_chats));




  }


  // to clear the chatsx
  const clearChats = () => {
    setChats([])
    localStorage.clear();
    setActiveChat(0);
  }


const setOnline=()=>{

  if(isOnline==='genai'){
    updateOnline('bot');
    return "Offline"
  }
  else{
    updateOnline('genai');
    return "Online"
  }
}


  return (

    <>
      <LeftNav chats={chats} createNewChat={createNewChat} setActiveChat={setActiveChat} clearChats={clearChats}></LeftNav>
      <div id="main_page">
        <TopNav setOnline={setOnline} isOnline={isOnline}></TopNav>
        <ChatPage active_chat={active_chat} chats={chats}></ChatPage>

        <InputBar createNewChat={createNewChat} setReqRes={setReqRes} ></InputBar>


      </div>

    </>

  );
}
export default App;
