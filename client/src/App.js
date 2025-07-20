import { useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import getRes from "./getRes";

export const App = () => {


       // set old chats at usestate intilization
const old_chat=[]
   try{

  const temp=localStorage.getItem("sbh_chats")
  
       JSON.parse(temp).forEach(c => {
        old_chat.push(c)
       });
       
        }
  catch(e){
    old_chat.push({id:"ch_"+old_chat.length ,reqs:[],ress:[]})
   
      // if there is no any local storage chat
 }


  const [chats, setChats] = useState(old_chat); 
  const [active_chat, setActiveChat] = useState(chats.length); 
 

  

  const createNewChat = () => {
   
  if(chats[chats.length-1].reqs.length===0)return;
      setActiveChat([...chats].length)   
     
      }



  // to add req and res in the chats list
  const setReqRes = (req, reqk) => {
 
   let temp_chat =[...chats];
if(chats.length===active_chat) temp_chat.push({id:"ch_"+chats.length,reqs:[],ress:[]});


    temp_chat[active_chat].reqs.push(req);   
    temp_chat[active_chat].ress.push(getRes(reqk));
  
    setChats(temp_chat);

    localStorage.setItem("sbh_chats",JSON.stringify(chats));
    console.log(chats)
  
  }


// to clear the chats
  const clearChats = () => {
     setChats([{ reqs: [], ress: [] }])
     localStorage.clear()
    setActiveChat(0);
  }


  return (

    <>
      <LeftNav chats={chats} createNewChat={createNewChat} setActiveChat={setActiveChat} clearChats={clearChats}></LeftNav>
      <div id="main_page">
        <TopNav></TopNav>
        <ChatPage active_chat={active_chat} chats={chats}></ChatPage>

        <InputBar createNewChat={createNewChat} setReqRes={setReqRes} ></InputBar>


      </div>

    </>

  );
}
export default App;
