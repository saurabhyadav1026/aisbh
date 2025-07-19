
import { History_icon, Clean_history_icon } from '../../icons';



import HistoryList from './HistoryList'

const history = (props) => {

    return (
        <>
            <div id="left_nav_center" className="left_bar">
                <div className="left_nav_icons">
                    <div id="history_icon"><History_icon></History_icon></div>
                </div>
                <div className="left_nav_bar">
                    <div className="left_option" style={{ paddingBottom: '10px', display: 'flex', width: '100%' }}>
                        <h3 style={{ width: '80%' }}>History</h3>
                        {/*   <!-- clear history btn --> */}
                        <span ><Clean_history_icon></Clean_history_icon></span>
                    </div>
                    {/*  <!-- list of chats  --> */}
                    <div id="history_list_bar" style={{ width: '100%', display: 'flex', flexDirection: ' column' }}>
<HistoryList chat_count={props.chat_count}></HistoryList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default history;




const history_list_bar = document.getElementById("history_list_bar");


export const clearHistory = () => {

    history_list_bar.innerHTML = "";

 // createChat();
}




const histDiv = ({chat_no}) => {

    return `
       
    <div className="history_list"  style={{width:'100%', display:'flex'}}> 
    <div style={{width:'80%'}}  onClick={()=>chatOn(`+chat_no+`)}>chat `+chat_no+` </div>  
    <span className="history_option_btn" style={{width:'20%',visibility:'hidden'}}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01"/><path d="M12 12h.01"/><path d="M7 12h.01"/><title>option</title></svg></span>
                            </div >
                           
    `
}


export const saveHistory = (chats_no) => {

   
       
     // for showing  chat in history bar
     const history_list_bar=   document.getElementById("history_list_bar");
     history_list_bar.innerHTML = histDiv(chats_no)+history_list_bar.innerHTML;
     
     
      
    
    }