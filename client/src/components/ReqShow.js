
import {editReq,copyReq} from '../server'
import {Edit,Copy} from './icons'

/* 
props 
        req_
        props.chat_no
          propsr_no

*/

const ReqShow=(props)=>{

   
    return ( 
    
    <div className="req">
    
                        <div className="req_cammand">
                            
                            {/* <!-- for your cammand displaying --> */}
                            {props.req_}
    
                        </div>


                        <div className="req_option">
    
                        {/*     <!--  edit btn--> */}
                            <span> <Edit func={editReq} chat_no={props.chat_no} r_no={props.r_no} ></Edit></span>
    
                               {/*  <!--  copy btn --> */}
                            <span><Copy func={copyReq} chat_no={props.chat_no} r_no={props.r_no}></Copy></span>
                        </div>
    
                    </div>
    
    
    );
    
    
    
    
    }

    export default ReqShow;
    