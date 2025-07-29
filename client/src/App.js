import { useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import getRes from "./getRes";
import getImageText from "./getImageText";







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
  const [isOnline,updateOnline]=useState('bot')

const [attachment_file,addAttachmentFile]=useState(null);






  const createNewChat = () => {

    if (chats[chats.length - 1].reqs.length === 0) return;
    setActiveChat([...chats].length)

  }



  // to add req and res in the chats list   reqk is the request string without trailing of witespace 
  const setReqRes = async(req, reqk) => {

let res="";
const file=attachment_file;
addAttachmentFile(null);
if(file!==null){

  const text=await getImageText(file);

  addAttachmentFile(null);

if(text!==""){
  res=" Your image text is: "+text+" and we get that: ";
  reqk=reqk+text;
}
}

    let temp_chats = [...chats];
    if (chats.length === active_chat) temp_chats.push({ id: "ch_" + chats.length, reqs: [], ress: [] });



res+=await getRes(reqk,isOnline);
    temp_chats[active_chat].reqs.push(req);
    temp_chats[active_chat].ress.push(res);


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
   
  }
  else{
    updateOnline('genai');
   
  } 
}


  return (

    <>
      <LeftNav chats={chats} createNewChat={createNewChat} setActiveChat={setActiveChat} clearChats={clearChats}></LeftNav>
      <div id="main_page">
        <TopNav setOnline={setOnline} isOnline={isOnline}></TopNav>
        <ChatPage active_chat={active_chat} setChats={setChats} chats={chats}></ChatPage>

        <InputBar attachment_file={attachment_file}addAttachmentFile={addAttachmentFile} createNewChat={createNewChat} setReqRes={setReqRes} ></InputBar>


      </div>

    </>

  );
}
export default App;



