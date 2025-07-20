

import { useEffect } from 'react';
import { NewChatIcon } from '../../icons';

const NewChat=(props)=>{
    
    useEffect(()=>{

   // createChat();
   
    },[])

  
    return (
        <>
           
        <div  className="left_bar"> 
    <div className="left_nav_icons">
        <div id="new_chat_icon"  ><NewChatIcon func={props.createNewChat}></NewChatIcon> </div>
    </div>
    <div className="left_nav_bar">
        <div  onClick={()=>props.createNewChat()} className="left_option"  >
            <h3 >New Chat</h3>
        </div>
       
    </div>

</div>

</>);
}

export default NewChat;


   
