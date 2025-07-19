import { use, useState } from "react";

import Top_nav from "./components/Top_nav";
import Left_nav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import getRes from "./getRes";

export const App=()=> {
  
  
const [active_chat,setActiveChat]=useState(0);
const [chat_count,set_chat_count]=useState();
const [r,setr]=useState(-1)

const [req_,editReq]=useState([])


const [res_,editRes]=useState([]);
  
const addReq=(req)=>{
editReq([...req_, req])

}
const addRes=(res)=>{
  editRes([...res_, res])
  
  }

  
const setReq=(req,reqk)=>{
  setr(r+1)

  addReq(req)
  addRes(getRes(reqk))
 addChat()
  sstest()
  }
 

      //    {reqs:[1,2],ress:[2,3]}

  const [chats,setChats]=useState([{reqs:[1,2],ress:[2,3]}])

console.log(chats)


// to create new chat
const addChat=()=>{ 
  setChats([...chats,{reqs:[],ress:[]}])
  
  }
  


  // testing to add new req and res in chat
const sstest=()=>{
 
let p=0;
const old_chats=[...chats];
old_chats[0].ress.push(8)
setChats(old_chats)


console.log(chats)
console.log(chats.length)

}
  

  
  
  return (
    
    <>
    <Left_nav chat_count={chat_count} setActiveChat={setActiveChat}></Left_nav>
      <div id="main_page">
        <Top_nav></Top_nav>
        <ChatPage active_chat={active_chat} r={r} res_={res_} req_={req_}></ChatPage>

        <InputBar active_chat={active_chat} setReq={setReq} ></InputBar>


      </div>
    
    </>

  );
}
export default App;
