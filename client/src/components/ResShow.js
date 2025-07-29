

import {Dislike,Copy,LikeRes,RegenerateBtn} from './icons'
/* 
props 
        req_
        props.chat_no
          propsr_no

*/

const resShow=(props)=>{ 



  const regenrateRes=(r)=>{
   props.setChats([...props.chats]);

    }










     return (
   <div className="res">
                <div className="res_output">                 
                {/*     <!-- for ai  response displaying  --> */}
                    {props.res_}
                </div>

                <div className="res_option">

                   {/*  <!--  copy btn --> */}
                    <span><Copy func={copyRes} r_no={props.r_no} ></Copy></span>

                  {/*       <!--  like btn --> */}
                    <span><LikeRes func={likeRes} r_no={props.r_no}></LikeRes></span>

                     {/*    <!-- dislike btn --> */}
                    <span><Dislike func={dislikeRes}  r_no={props.r_no} ></Dislike></span>


                      {/*   <!-- regenerate btn --> */}
                    <span><RegenerateBtn func={regenrateRes}  r_no={props.r_no}></RegenerateBtn></span>

                </div>

            </div>
    


);

}

export default resShow;




const copyRes=(r)=>{

  const text = document.getElementsByClassName("res_output")
 navigator.clipboard.writeText(text[0].innerHTML).then(
  ()=>alert(" text coppied.")
 ) 

  
}

const likeRes=(r)=>{
  alert("Its my pleasure sir,I am always here for your help.  ")
}


const dislikeRes=(r)=>{
  alert("I appolize, I will improve myself.Thanks for feedback.")
}

