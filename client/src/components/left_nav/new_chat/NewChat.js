

import { useState} from 'react';
import { NewChatIcon } from '../../icons';

import SearchedFriendList from './SearchedFriendList'

import { getName, new_chat } from '../../userProfile/users';

const NewChat=(props)=>{    
   


    const createNewFChat=()=>{
        
document.getElementById("new_chat_op1").style='visibility:hidden;';

if(props.activeUser==='sbhunk'){
    alert("need to logg in");
    return;
}

document.getElementById("new_chat_op2").style='visibility:visible;';
  
}

const searchF=async()=>{
  document.getElementById("new_chat_op2").style='visibility:hidden;';  
 const s_input=document.getElementById('search_input');
   new_chat(props.activeUser,s_input.value) 
   const u_name=await getName(s_input.value)
   props.setActiveChat({username:s_input.value,name:u_name})
   s_input.value=''
  
}



const [t,setT]=useState(0)

  const createNewAIChat = async() => {
    document.getElementById("new_chat_op1").style='visibility:hidden;';
    await new_chat(props.activeUser,"sbhai"+t)  
    props.setActiveChat({username:"sbhai"+t.toString(),name:"sbhai"+t.toString()})
    const x=t;
    setT(x+1);

  }
  
    return (
        <>
           
        <div  className="left_bar"> 
    <div className="left_nav_icons">
        <div id="new_chat_icon"  ><NewChatIcon func={createNewChat}></NewChatIcon> </div>
    </div>
    <div className="left_nav_bar">
        <div  onClick={()=>createNewChat()} className="left_option"  >
            <h3 >New Chat</h3>
        </div>
        <div id="new_chat_op1" style={{visibility:'hidden'}}><button onClick={()=>createNewFChat()}>Friend</button>
        <button onClick={()=>createNewAIChat()}>AI</button>
        </div>
       <div id="new_chat_op2" style={{visibility:'hidden'}}><input type="search" id="search_input"></input><button onClick={searchF}>Search</button>
       <SearchedFriendList></SearchedFriendList>
       </div>
    </div>

</div>

</>);
}

export default NewChat;

const createNewChat=()=>{

    
document.getElementById("new_chat_op1").style='visibility:visible;';
}



   
