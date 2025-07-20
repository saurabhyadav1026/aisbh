




export const HistoryList = (props) => {

    return <>

        {
            props.chats.map((chat,i) => {
               return <div onClick={() => {props.setActiveChat(i)}}>Chat {i} </div>
            }
            )

        }
    </>
}

export default HistoryList;