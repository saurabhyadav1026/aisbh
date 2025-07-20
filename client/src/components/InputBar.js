
import {AddAttachmentIcon,SendIcon} from './icons';





 




const InputBar = (props) => {


  
    const send=()=>{
        
 const io=document.getElementById("cammand_input");
 const reqk=[];                                     // filtered request key list
 const req=io.value                                 // original input req  string
 req.toLowerCase().split(" ").forEach((r)=> {        
    if( r!=="")reqk.push(r)                           // to remove trail of white space
 });                                                //   and store the split word in list req

 if(reqk.length===0)return;          // return if blank input

 props.setReqRes(req,reqk);
 io.value="";                   // to clear the input bar
    }




    // for seetting key shortcuts
    const keyFunctions=(e)=>{

        if((!e.shiftKey)&&(e.key==='Enter'))send();
        if(((e.shiftKey)&&(e.key==='n'))||((e.shiftKey)&&(e.key==='N'))){
            props.createNewChat();
        
        }
    }





    return (
        <>

            <div id="text_input_bar">
                {/* <!-- add attachment btn --> */}
              <div id="add_file_btn"><AddAttachmentIcon></AddAttachmentIcon></div>

                {/*  intput area  */}
                <input id="cammand_input" onKeyDown={(key)=>{keyFunctions(key)}} placeholder="Enter here.."/> 


                {/* <!-- send btn --> */}
                <div id="send_input_btn"><SendIcon func={send}></SendIcon></div>


            </div>

        </>

    );





}

export default InputBar;



