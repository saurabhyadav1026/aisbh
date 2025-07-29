
import { useEffect,useState } from 'react';
import {AddAttachmentIcon,LoadingIcon,SendIcon} from './icons';





 




const InputBar = (props) => {

const [isFetching,setFetching]=useState(false)

useEffect(()=>{



},[isFetching])


useEffect(()=>{
  if(props.attachment_file!==null){
document.getElementById("add_file_btn").style='background-image:url("'+props.attachment_file+'"';
    
  }
  else document.getElementById("add_file_btn").style='background-image:none';
 
},[props.attachment_file])


  
    const send=()=>{
        if(isFetching){
            alert("we loading your response pls wait.")
            return;
        }
        setFetching(true);
 const io=document.getElementById("cammand_input");
 const reqk=[];                                     // filtered request key list
 const req=io.value                                 // original input req  string
 req.toLowerCase().split(" ").forEach((r)=> {        
    if( r!=="")reqk.push(r)                           // to remove trail of white space
 });                                                //   and store the split word in list req

 if(reqk.length===0&&props.attachment_file===null)return;          // return if blank input

 props.setReqRes(req,reqk.join(" "));
 io.value="";                   // to clear the input bar
    setFetching(false);
}




    // for seetting key shortcuts
    const keyFunctions=(e)=>{

        if((!e.shiftKey)&&(e.key==='Enter'))send();
        if(((e.shiftKey)&&(e.key==='n'))||((e.shiftKey)&&(e.key==='N'))){
            document.getElementById("cammand_input").value="";
            props.createNewChat();
        
        }
    }



    const getAttachmentInput=(e)=>{
props.addAttachmentFile(URL.createObjectURL(e.target.files[0]));
    }





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





