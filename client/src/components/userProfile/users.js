

/* 

ai chat :     sbhai1:{nae:"",res:[....],req:[....]}
friend chat:   usn:[{t:"",by:1|2,text:" "}]




*/


import axios from 'axios'
import getRes from '../../getRes';

const responser=process.env.REACT_APP_API_KEY+'/users';
export const addUser=async(u)=>{

    const user={
    username:u.username,
    name:u.name,
    userpassword:u.userpassword,
    contact:u.email,
    chats:{},  
    unread:{},
    isReloade:false  
}
user['chats'][u.username]=[{time:"11",by:1,text:"Hello!  "+u.username,status:"3" }]
user['unread'][u.username]=0;

try{
await axios.post(responser+'/newuser',user);
  }
    catch(error){alert("failed to connect with server. Try after some time.")
    }
}


const sbhunk={
    username:'sbhunk',
    name:'unknown',
      chats:{}   


}


export const checkIsUsernameAvailble=async(username)=>{
let res
    try{res=await fetch(responser+'/checkisusernameavailble?username='+username);
    res=await res.json();
    res=res.value;}catch{alert("failed to connect with server. Try after some time.")}
    return res;
}



export const new_chat=async(activeuser,activechat)=>{
if(activeuser.includes('sbhunk')){
    sbhunk['chats'][activechat]={name:'unknown'+activechat[5],reqs:[],ress:[]}
}
    else try{
      await fetch(responser+'/newchat?activeuser='+activeuser+'&&activechat='+activechat)
    }catch{alert("failed to connect with server. Try after some time.")}
    
    
    }





export const verifyUser=async(username,userpassword)=>{
    let rr=false;
    try  {let res=await fetch(responser+'/verifyuser?username='+username+'&&userpassword='+userpassword)
        res=await res.json();
        rr=res.value;
    }catch(e){alert("failed to connect with server. Try after some time.")}
return rr;

}


export const reloaded=async(username)=>{
  try{  await fetch(responser+'/reloaded?username='+username)

}catch{}

}

export const getChatList=async(u)=>{
let chat_list=[]
if(u.includes('sbhunk')){
    
    Object.keys(sbhunk['chats']).forEach((x)=>{
chat_list.push({username:x,name:sbhunk['chats'][x]['name']})
    })
}else try{
let res=await fetch(responser+'/getchatslist?activeuser='+u)
 res= await res.json();
 chat_list=res.value}catch{ alert("failed to connect with server. Try after some time.")}
return chat_list||[{username:null,name:'Loading....'}];
}

export const getName=async(user)=>{
    if(user.includes('sbhunk'))return 'unknown';
    let name;
     try{ let res=await fetch(responser+'/getname?username='+user)
   
     res= await res.json()
       name=res.value}
       catch{alert("failed to connect with server. Try after some time.")}
       return name||'Loading...';
}


export const getIsReloade=async(username)=>{
    if(username==='sbhunk')return false;
    let is_reloade={value:false}
   try {const res=await fetch(responser+'/getisreloade?username='+username)
        is_reloade= await res.json()
    }catch{}
    return is_reloade.value;
}



export const getChat=async(activeuser,activechat)=>{

    let chat;  
    if(activechat===null)return [];
    if(activeuser==='sbhunk'){
chat=[];
        sbhunk['chats'][activechat]['reqs'].forEach((r,i)=>{
            let rr=sbhunk['chats'][activechat]['ress'][i]
            chat.push({by:1,text:r},{by:2,text:rr})
         
        })
    }
else{
    try{
     const res=await fetch(responser+'/getchat?activeuser='+activeuser+'&&activechat='+activechat)
     chat= await res.json();
     chat=chat.value
   }catch{}
 } 
 
 return chat||[{by:1,text:'Loading your chat.....'}];

}


export const sendToAI=async(activeuser,activechat,req)=>{

    if(activeuser.includes('sbhunk')){
        sbhunk['chats'][activechat]['reqs'].push(req)
        sbhunk['chats'][activechat]['ress'].push(await getRes(req))
    }
else try    {
    await fetch(responser+'/sendtoai?activeuser='+activeuser+'&&activechat='+activechat+'&&req='+req)

}catch(e){alert("check your internet connection or wait")}
}




export const sendToF=async(activeuser,activechat,text)=>{
     try{ await fetch(responser+'/sendtofriend?activeuser='+activeuser+'&&activechat='+activechat+'&&text='+text)
 }catch{alert("check you internet connection or wait")}
}



export const getSearchList=async(input)=>{
let list;

   try{ const res=await fetch(responser+'/getsearchlist?input='+input);
     list=await res.json()
     list=list.value
    }
     catch{}
    return list||[{username:null,name:"wait Searching...."}]
}


export const getOtp=async (mail)=>{
    let otp={status:'not_get'};
   try{ const res= await fetch(responser+'/getotp?email='+mail);
     otp=await res.json();}catch{alert("check your internet connection or try agail later.")}
    return otp;    
}