
import { useState } from "react";
import ReqShow from "./ReqShow";
import ResShow from "./ResShow";


const Chat_page=(props)=>{


const r_no=props.r;
   

    return (
        
        <>
       
         <div id="chat_page">
{
  props.req_.map( (req,i)=>{
   
return <>
<ReqShow req_={props.req_[i]}  chat_no={props.active_chat} r_no={r_no}> </ReqShow>
<ResShow res_={props.res_[i]} chat_no={props.active_chat} r_no={r_no}></ResShow>
</>
  }
  )

}

  </div>
      
        </>
    );
}
export default Chat_page;