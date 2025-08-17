
import ReqShow from "./ReqShow";
import ResShow from "./ResShow";
import React from "react";
const ChatPage = (props) => {




 
  
 

  
  // for new chat page return empty chat page
  
 
 
 if (props.activeChat === null) return <div id="chat_page">select chat to view</div>

else if (props.chat === null) return <div id="chat_page"></div>
    return <div id="chat_page">{
     
       props.chat.map((u, i) => {
            return <React.Fragment key={i}>
        {u.by=== 1 ? <ReqShow req_={u['text']} r_no={i}> </ReqShow> : <ResShow res_={u['text']} r_no={i}></ResShow>}
      </React.Fragment>

       })
    }
    </div>

  }

  export default ChatPage;