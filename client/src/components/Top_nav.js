
import {useState} from 'react'
import { Bot_icon } from "./icons";



const Top_nav =(props)=>{

    const [nav_flag,setNavFlag]=useState(true);
const leftNavControl=()=>{
      if(nav_flag){
    setNavFlag(false)
     document.getElementById("left_nav").style="display:none";
    document.getElementById("main_page").style="width:100%;";
    document.getElementById("text_input_bar").style="width:80%;left:10%;"
   }
   else{
    setNavFlag(true)
   document.getElementById("left_nav").style="display:flex;width:40%";
    document.getElementById("main_page").style="width:60%;"
     document.getElementById("text_input_bar").style="width:50%;left:45%"

   }
}

    return <>

    <div id="top_nav_bar">
<span > <h1 onClick={()=>leftNavControl()}style={{height:"100%",width:"100%"}}> =</h1></span>
<span><h1 style={{display:"inline"}}>SBH CHATBOT  <Bot_icon></Bot_icon></h1> </span>


    </div>
    
    </>
}
export default Top_nav;