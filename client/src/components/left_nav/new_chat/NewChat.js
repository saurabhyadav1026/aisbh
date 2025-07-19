

import { useEffect } from 'react';
import { New_chat_icon } from '../../icons';

const NewChat=()=>{
    
    useEffect(()=>{

   // createChat();
   
    },[])

  
    return (
        <>
           
        <div  className="left_bar">
    <div className="left_nav_icons">
        <div id="new_chat_icon"  ><New_chat_icon></New_chat_icon> </div>
    </div>
    <div className="left_nav_bar">
        <div  onClick={()=>"createChat"} className="left_option"  >
            <h3 >New Chat</h3>
        </div>
       
    </div>

</div>

</>);
}

export default NewChat;


   
