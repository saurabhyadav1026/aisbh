

import {  useState} from 'react';
import { NewChatIcon } from '../../icons';

import SearchedFriendList from './SearchedFriendList'

import { getSearchList, new_chat } from '../../userProfile/users';

const NewChat=(props)=>{    
   
const [searchList,setSearchList]=useState([])

   
const searchF=async()=>{

  if(props.activeUser==='sbhunk'){
    alert("need to loggin");
    return;}

 const s_input=document.getElementById('search_input');
 if(s_input.value.trim()==="")setSearchList([])
 else { const s_List=await getSearchList(s_input.value)
   setSearchList(s_List)
   }s_input.value='';
  
}



const [t,setT]=useState(0)

  const createNewAIChat = async() => {
    await new_chat(props.activeUser,"sbhai"+t)  
    props.setActiveChat({username:"sbhai"+t.toString(),name:"sbhai"+t.toString()})
    const x=t;
    setT(x+1);

  }
    return (
        <>
           
        <div  className="left_bar"> 
    <div className="left_nav_icons">
        <div id="new_chat_icon"  ><NewChatIcon ></NewChatIcon> </div>
    </div>
    <div className="left_nav_bar">
        <div  className="left_option"  >
            <h3 >New Chat</h3>
        </div>
        <div><button style={{width:'100%'}} onClick={()=>createNewAIChat()}>chat with AI</button></div>
         <div id="new_chat_op2"><input style={{width:'70%'}} type="search" placeholder='search your friends...' id="search_input" onKeyUp={(key)=>{if(key.key==='Enter')searchF()}}></input><button style={{width:'30%'}} onClick={searchF}>Search</button>
              
       <SearchedFriendList searchList={searchList}  setActiveChat={props.setActiveChat}></SearchedFriendList>
       </div>
    </div>

</div>

</>);
}

export default NewChat;




   
