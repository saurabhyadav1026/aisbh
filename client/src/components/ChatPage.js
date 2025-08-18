
import ReqShow from "./ReqShow";
import ResShow from "./ResShow";
import React, { useEffect, useRef } from "react";


const ChatPage = (props) => {


const chatPageRef=useRef(null);

useEffect(()=>{
  const div_ref=chatPageRef.current
    if(chatPageRef){
    div_ref.scrollTop=div_ref.scrollHeight
  }
},[props.chat])

 
  
 

  
  // for new chat page return empty chat page
  
 if (props.activeChat === null) return <div className="scrollbar-only-rod" ref={chatPageRef} id="chat_page">select chat to view</div>

else if (props.chat === null) return <div className="scrollbar-only-rod" ref={chatPageRef} id="chat_page"></div>
    return <div className="scrollbar-only-rod"   ref={chatPageRef} id="chat_page">{
     
       props.chat.map((u, i) => {
            return <React.Fragment key={i}>
        {u.by=== 1 ? <ReqShow req_={u['text']} r_no={i}> </ReqShow> : <ResShow res_={u['text']} r_no={i}></ResShow>}
      </React.Fragment>

       })
    }
    </div>

  }

  export default ChatPage;