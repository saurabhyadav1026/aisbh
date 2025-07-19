import react,{useState,useEffect} from 'react';
import{saveHistory}from './components/left_nav/history/History'
import ReqShow from './components/ReqShow';
import ResShow from './components/ResShow';

let local_active_chat=-1;                         // active chat flag
let local_chats=[]  ;             // chats list  [ {"reqs":[req1,req2,..],"ress":[res1,res2,..]}]
let chat_count=-1;                         // chat count variable














/* 
const putChat = (chat_no, req_, res_) => {

    const [chats, chatsUpdate] = useState([]);               // it store all chats

    chatsUpdate(old_chats =>{
        
        if(chat_no<local_chats.length){
        old_chats.map((chat, i) => {
            if (i === chat_no)
                return {
                    ...chat,
                    "req": [...chat.req, req_],
                    "res": [...chat.res, res_]
                }
            else return chat
        }
        )
    }

    else{
       return  [old_chats, {"req":[req_],"res":[res_]}]
         
    }
    
    
    }   
    );


local_chats=chats;

}


 */













// for getting old chats if availble
function get_all_chats() {
    try {
        const c = localStorage.getItem("sbh_chats")
        local_chats = JSON.parse(c);

      

        for (let i = 0; i < local_chats.length; i++) {
           
            saveHistory(i); 

        }
    }
    catch (e) {
        local_chats = [];
       

    }

}


export const saveChats=()=> {
    localStorage.setItem("sbh_chats", JSON.stringify(local_chats));
}



export const  createChat=()=> {
    

    const cammand_input=document.getElementById('cammand_input');
    //  to clean the chat page 
   
    cammand_input.value = "";

    if (chat_count !== -1 && local_chats[chat_count].reqs[0] === null){
  
        return;          // if there is new chat is empty then no new chat will create
    }

    // increase the chat count
    chat_count++;
    local_active_chat=chat_count;
    local_chats[local_active_chat]={"reqs":[],"ress":[]}

}



export const chatOn=(chat_no)=> {
    const chat_page=document.getElementById('chat_page');
    const cammand_input=document.getElementById('cammand_input');
        chat_page.innerHTML = "";
    cammand_input.value = "";
    local_active_chat=chat_no;

    for (let i = 0; i < local_chats[chat_no].reqs.length; i++) {
        displayReqRes(chat_no,local_chats[chat_no].reqs[i],local_chats[chat_no].ress[i]);

    }



}


export const sendCammand=(s,setS)=> {

    console.log("sbh ="+s)
    console.log("okkkkk="+setS)

    const chat_page=document.getElementById('chat_page');
    const cammand_input=document.getElementById('cammand_input');

    const req_input = cammand_input.value;              // getting input
    cammand_input.value = "";    // to clean the input area
//setS(req_input)
const response='hello! I am <b>sai</b>, </br> how can i help you?'      // for respose





    

    // storing the request and response in the chat history
    local_chats[local_active_chat].reqs.push(req_input);             // to add the request to the local_chats list
    local_chats[local_active_chat].ress.push(response);             // to add the response in local_chats list

  //  save_chats();                                   // to save the local_chats in local storage 

    if (local_chats[local_active_chat].reqs.length === 1) saveHistory(local_active_chat);     // to add the chat in history bar

    displayReqRes(local_active_chat,req_input,response);             // for displaying the chat in chat page

}



const displayReqRes=(chat_no,req,res)=>{
    const chat_page=document.getElementById('chat_page');
    const _req = ReqShow(req, chat_no, local_chats[chat_no].reqs.length);                    
    const _res = ResShow(res, chat_no, local_chats[chat_no].ress.length);
    chat_page.innerHTML += _req + _res;


}







export const editReq=(chat_no, r_no)=> {


}

export const copyReq=(chat_no, r_no)=> {

}


export const copyRes=(chat_no, r_no)=> {

}
export const likeRes=(chat_no, r_no)=> {

}

export const dislikeRes=(chat_no, r_no)=> {

}

export const regenrateRes=(chat_no, r_no)=> {



}
