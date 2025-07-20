import React from "react";
import ReqShow from "./ReqShow";
import ResShow from "./ResShow";


const ChatPage=(props)=>{

 

      // for new chat page return empty chat page
  if(props.chats.length===props.active_chat)return <div id="chat_page"></div>
   

    return (        
          <div id="chat_page">
{ 
  props.chats[props.active_chat].reqs.map( (req,i)=>{    
return    <React.Fragment key={i}>
<ReqShow req_={req}   r_no={i}> </ReqShow>
<ResShow res_={props.chats[props.active_chat].ress[i]}   r_no={i}></ResShow>
</React.Fragment >
  })
}
  </div>
    );
}
export default ChatPage;