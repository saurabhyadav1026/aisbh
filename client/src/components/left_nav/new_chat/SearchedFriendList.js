
  import React from "react"

const SearchedFriendsList=(props)=>{
return <>

        {
            props.searchList.map((u,i) => {
                             return    <React.Fragment key={i}>
               <div className="listshow" style={{cursor:"pointer"}}onClick={() => {props.setActiveChat(u)}}>{u['name']} </div>
               </React.Fragment>
            }
            )

        }
    </>

}


export default SearchedFriendsList;