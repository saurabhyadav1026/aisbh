


import React from "react"

export const HistoryList = (props) => {

    return <>

        {
            props.chats.map((chat,i) => {
               return    <React.Fragment key={i}>
               <div onClick={() => {props.setActiveChat(i)}}>{chat.id} </div>
               </React.Fragment>
            }
            )

        }
    </>
}

export default HistoryList;