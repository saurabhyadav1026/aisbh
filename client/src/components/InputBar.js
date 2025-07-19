
import {Add_attachment_icon,Send_icon} from './icons';

import {sendCammand } from "../server"
import { useState } from 'react';




 




const InputBar = (props) => {


  
    const send=()=>{
        
 const io=document.getElementById("cammand_input");
 const reqk=[];                                     // filtered request key list
 const req=io.value                                 // original input req  string
 req.toLowerCase().split(" ").forEach((r)=> {        
    if( r!="")reqk.push(r)                           // to remove trail of white space
 });                                                //   and store the split word in list req

 if(reqk.length===0)return;          // return if blank input

 props.setReq(req,reqk);
 io.value="";                   // to clear the input bar
    }




    return (
        <>

            <div id="text_input_bar">
                {/* <!-- add attachment btn --> */}
               {/*  <div id="add_file_btn"><Add_attachment_icon></Add_attachment_icon></div>
 */}
                {/*  intput area  */}
                <input id="cammand_input" onKeyDown={(e)=>{if(!e.shiftKey&&e.key==='Enter')send()}} placeholder="Enter here.."/> 


                {/* <!-- send btn --> */}
                <div id="send_input_btn"><Send_icon func={send}></Send_icon></div>


            </div>

        </>

    );

}

export default InputBar;