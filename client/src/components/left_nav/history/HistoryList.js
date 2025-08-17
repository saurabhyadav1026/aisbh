

'use client';
import React from "react";


export const HistoryList =(props) => {
    return <>

        {
            props.chatsList.map((u,i) => {
                             return    <React.Fragment key={i}>
               <div style={{cursor:"pointer"}}onClick={() => {props.setActiveChat(u['username'])}}>{u['name']} </div>
               </React.Fragment>
            }
            )

        }
    </>
}

export default HistoryList;