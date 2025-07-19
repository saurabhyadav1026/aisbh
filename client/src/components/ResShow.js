

import {Dislike,Copy,LikeRes,RegenerateBtn} from './icons'
/* 
props 
        req_
        props.chat_no
          propsr_no

*/

const resShow=(props)=>{ 


     return (
   <div className="res">
                <div className="res_output">                 
                {/*     <!-- for ai  response displaying  --> */}
                    {props.res_}
                </div>

                <div className="res_option">

                   {/*  <!--  copy btn --> */}
                    <span><Copy func={"copyRes"} chat_no={props.chat_no} r_no={props.r_no}></Copy></span>

                  {/*       <!--  like btn --> */}
                    <span><LikeRes func={"likeRes"} chat_no={props.chat_no} r_no={props.r_no}></LikeRes></span>

                     {/*    <!-- dislike btn --> */}
                    <span><Dislike func={"dislikeRes"} chat_no={props.chat_no} r_no={props.r_no} ></Dislike></span>


                      {/*   <!-- regenerate btn --> */}
                    <span><RegenerateBtn func={"regenrateRes"} chat_no={props.chat_no} r_no={props.r_no}></RegenerateBtn></span>

                </div>

            </div>
    


);

}

export default resShow;
