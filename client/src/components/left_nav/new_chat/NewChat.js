

import { useState} from 'react';
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
   new_chat(props.activeUser,s_input.value) 
   const s_List=await getSearchList(s_input.value)
   setSearchList(s_List)
   s_input.value='';
  
}



const [t,setT]=useState(0)

  const createNewAIChat = async() => {
    document.getElementById("new_chat_op1").style='visibility:hidden;';
    await new_chat(props.activeUser,"sbhai"+t)  
    props.setActiveChat({username:"sbhai"+t.toString(),name:"sbhai"+t.toString()})
    const x=t;
    setT(x+1);

  }

  console.log(props.searchList)
  
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
         <div id="new_chat_op2"><input type="search" id="search_input"></input><button onClick={searchF}>Search</button>
              <div id="new_chat_op1" >
                 <button onClick={()=>createNewAIChat()}>AI</button>
        </div>
       <SearchedFriendList searchList={searchList}  setActiveChat={props.setActiveChat}></SearchedFriendList>
       </div>
    </div>

</div>

</>);
}

export default NewChat;




   
