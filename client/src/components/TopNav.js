
import {useState} from 'react'
import { BotIcon } from "./icons";



const TopNav =(props)=>{

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
console.log(props.isOnline)

    return <>

    <div id="top_nav_bar">
<span > <h1 onClick={()=>leftNavControl()}style={{height:"100%",width:"100%"}}> =</h1></span>
<span > <h6 onClick={()=>props.setOnline()}style={{height:"100%",width:"100%"}}> {props.isOnline}</h6></span>
<span><h1 style={{display:"inline"}}>SBH CHATBOT  <BotIcon></BotIcon></h1> </span>


    </div>
    
    </>
}
export default TopNav;