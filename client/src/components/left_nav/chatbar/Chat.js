
import { ChatIcon} from '../../icons';



import ChatList from './ChatList'

const Chat = (props) => {
    return (
        <>
            <div id="left_nav_center" className="left_bar">
                <div className="left_nav_icons">
                    <div id="chat_icon"><ChatIcon></ChatIcon></div>
                </div>
                <div className="left_nav_bar">
                    <div className="left_option" style={{ paddingBottom: '10px', display: 'flex', width: '100%' }}>
                        <h3 style={{ width: '80%' }}>Chat</h3>
                      </div>
                    {/*  <!-- list of chats  --> */}
                    <div id="history_list_bar" className="scrollbar-only-rod" style={{ width: '100%', display: 'flex', flexDirection:"column-reverse" }}>
                    <ChatList chatsList={props.chatsList} setActiveChat={props.setActiveChat} ></ChatList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;








