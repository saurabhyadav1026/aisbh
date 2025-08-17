//import { useEffect,useState } from 'react';
import {AddAttachmentIcon,LoadingIcon,SendIcon} from './icons';


//import getImageText from '../getImageText'
import {sendToAI, sendToF} from './userProfile/users'
 




const InputBar = (props) => {




  
    const send=async()=>{
   console.log('send')     
 const io=document.getElementById("cammand_input");
 const reqk=[];                                     // filtered request key list
 const req=io.value                                 // original input req  string
 req.split(" ").forEach((r)=> {        
    if( r!=="")reqk.push(r)                           // to remove trail of white space
 });                                                //   and store the split word in list req

 if(reqk.length===0&&props.attachment_file===null)return;          // return if blank input
console.log("ggggg")
 if(props.activeChat.includes('sbhai'))await sendToAI(props.activeUser,props.activeChat,req);
else await sendToF(props.activeUser,props.activeChat,req)
 console.log("yeee baat")
io.value="";                   // to clear the input bar
   props.updateChatChatList();
}




    // for seetting key shortcuts
    const keyFunctions=(e)=>{

        if((!e.shiftKey)&&(e.key==='Enter'))send();
        if(((e.shiftKey)&&(e.key==='n'))||((e.shiftKey)&&(e.key==='N'))){
            document.getElementById("cammand_input").value="";
           // props.createNewChat();
        
        }
    }



    const getAttachmentInput=(e)=>{
//props.addAttachmentFile(URL.createObjectURL(e.target.files[0]));
    }

 // to add req and res in the chats list   
  
  /*
  const [attachment_file, addAttachmentFile] = useState(null);

  const getAIRes = async (req) => {
    let res = "";
    let attachment_data="";

    if (attachment_file !== null) {
      const file = attachment_file;

      addAttachmentFile(null);
      attachment_data = await getImageText(file); 
      addAttachmentFile(null);

      if (attachment_data !== "") {
        res = " Your image text is: " + attachment_data+ " and we get that: ";
       
      }
    } 
    sendtoAI(props.activeUser,props.activeChat,req);
  }

*/


if(props.activeChat===null) return <></>

    return (
        <>

            <div id="text_input_bar">
                
                <input id="add_attachment" style={{display:"none"}} type="file" accept="image/*" onChange={getAttachmentInput} />
{/* <!-- add attachment btn --> */}
              <div id="add_file_btn"><AddAttachmentIcon func={()=>document.getElementById("add_attachment").click()}></AddAttachmentIcon></div>
             
                {/*  intput area  */}
                <input id="cammand_input" onKeyUp={(key)=>{keyFunctions(key)}} placeholder="Enter here.."/> 


                {/* <!-- send btn --> */}
                <div id="send_input_btn">{props.isFetching?<LoadingIcon></LoadingIcon>:<SendIcon func={send}></SendIcon>}</div>


            </div>

        </>

    );





}

export default InputBar;





