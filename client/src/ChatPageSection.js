import { useCallback, useEffect, useState } from "react";

import TopNav from "./components/TopNav";
import LeftNav from './components/left_nav/LeftNav';
import ChatPage from './components/ChatPage';
import InputBar from './components/InputBar';
import { getChat,getChatList,getIsReloade ,reloaded} from "./components/userProfile/users";
export const ChatPageSection = (props) => {






  const [activeChat, setActiveChat] = useState({username:null,name:null});

  const [chatsList, setChatList] = useState([]);

  const [chat, setchat] = useState([]);

  const [isReloade,setIsReloade]=useState(false);
   const [width, setWidth] = useState(window.innerWidth);
  const [nav_flag,setNavFlag]=useState('C');

  useEffect(()=>{
const reloadeInterval=setInterval(async()=>{
 const  is_reloade=await getIsReloade(props.activeUser);
 if(!(isReloade===is_reloade)) setIsReloade(is_reloade)
},1000)
    return ()=>clearInterval(reloadeInterval)
  },[isReloade,props.activeUser])





  const updateChatChatList = useCallback(async () => {
    
    if(activeChat.name!==null&&nav_flag!=='A')setNavFlag('B');

    let c = await getChat(props.activeUser, activeChat.username);
     let c_list = await getChatList(props.activeUser);
    setchat(c)
    setChatList(c_list);
    reloaded(props.activeUser);
  },[props.activeUser,activeChat,nav_flag])


useEffect(()=>{
updateChatChatList();
},[isReloade,updateChatChatList])








const [controProperty,setControlProperty]=useState({left:{display:null},main:{width:null}})
    
useEffect(()=>{
if(nav_flag==='A')setControlProperty({input:{left:'5%',width:'90%'},left:{display:'none'},main:{width:"100%",display:'flex'}})
  else if(nav_flag==='B'&&(activeChat.name!==null&&width<501))setControlProperty({input:null,left:{display:'none'},main:{width:'100%',display:'flex'}})
  else setControlProperty({input:null,left:{display:null},main:{width:null}})
},[width,nav_flag,activeChat])
 

const leftNavControl=()=>{
   if(nav_flag==='B' &&activeChat.name!==null)setNavFlag('A')
      else if(nav_flag==='A' &&width>450&&activeChat.name!==null)setNavFlag('B')
          else  setNavFlag('c')
      
   }




  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // cleanup when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);


   



  return (

    <>
      <LeftNav  sty_lft={controProperty.left} activeChat={activeChat.username}  chatsList={chatsList} activeUser={props.activeUser} setPage={props.setPage} setActiveChat={setActiveChat} ></LeftNav>
      <div id="main_page" style={controProperty.main}>
        <TopNav  leftNavControl={leftNavControl} activeChat={activeChat.name}></TopNav>
        <ChatPage  chat={chat} activeChat={activeChat.username} activeUser={props.activeUser}></ChatPage>

        <InputBar sty_input={controProperty.input}updateChatChatList={updateChatChatList} activeChat={activeChat.username} activeUser={props.activeUser} ></InputBar>


      </div>

    </>

  );
}
export default ChatPageSection
  ;



