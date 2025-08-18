

'use client';
import React from "react";


export const ChatList =(props) => {
    return <>

        {
            props.chatsList.map((u,i) => {
                             return    <React.Fragment key={i}>
               <div style={{cursor:"pointer"}}onClick={() => {props.setActiveChat(u)}}>{u['name']} </div>
               </React.Fragment>
            }
            )

        }
    </>
}

export default ChatList;