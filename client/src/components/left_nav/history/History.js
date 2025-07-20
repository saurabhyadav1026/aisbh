
import { HistoryIcon, ClearHistoryIcon } from '../../icons';



import HistoryList from './HistoryList'

const history = (props) => {
    return (
        <>
            <div id="left_nav_center" className="left_bar">
                <div className="left_nav_icons">
                    <div id="history_icon"><HistoryIcon></HistoryIcon></div>
                </div>
                <div className="left_nav_bar">
                    <div className="left_option" style={{ paddingBottom: '10px', display: 'flex', width: '100%' }}>
                        <h3 style={{ width: '80%' }}>History</h3>
                        {/*   <!-- clear history btn --> */}
                        <span  ><ClearHistoryIcon func={props.clearChats}></ClearHistoryIcon></span>
                    </div>
                    {/*  <!-- list of chats  --> */}
                    <div id="history_list_bar" style={{ width: '100%', display: 'flex', flexDirection:"column-reverse" }}>
<HistoryList setActiveChat={props.setActiveChat} chats={props.chats}></HistoryList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default history;








