

/* 

ai chat :     sbhai1:{nae:"",res:[....],req:[....]}
friend chat:   usn:[{t:"",by:1|2,text:" "}]




*/


import axios from 'axios'
import getRes from '../../getRes';

const responser=process.env.REACT_APP_API_KEY+'/users';
export const addUser=async(n,u,p,c)=>{

    const user={
    username:u,
    name:n,
    userpassword:p,
    contact:c,
    chats:{},  
    unread:{},
    isReloade:false  
}
user['chats'][u]=[{time:"11",by:1,text:"my name is "+n,status:"3" }]
user['unread'][u]=0;

try{
await axios.post(responser+'/newuser',user);
  }
    catch(error){
    }
}


const sbhunk={
    username:'sbhunk',
    name:'unknown',
      chats:{}   


}


export const checkIsUsernameAvailble=async(username)=>{

    let res=await fetch(responser+'/checkisusernameavailble?username='+username);
    res=await res.json();
    res=res.value;
    return res;
}



export const new_chat=async(activeuser,activechat)=>{
if(activeuser.includes('sbhunk')){
    sbhunk['chats'][activechat]={name:'unknown'+activechat[5],reqs:[],ress:[]}
}
    else try{
      await fetch(responser+'/newchat?activeuser='+activeuser+'&&activechat='+activechat)
    }catch{}
    
    
    }





export const verifyUser=async(username,userpassword)=>{
    let rr=false;
    try  {let res=await fetch(responser+'/verifyuser?username='+username+'&&userpassword='+userpassword)
        res=await res.json();
        rr=res.value;
    }catch(e){}
return rr;

}


export const reloaded=async(username)=>{
    await fetch(responser+'/reloaded?username='+username)
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
 chat_list=res.value}catch{}
return chat_list;
}

export const getName=async(user)=>{
    if(user.includes('sbhunk'))return 'unknown';
    let name='unknown'
     try{ let res=await fetch(responser+'/getname?username='+user)
   
     res= await res.json()
       name=res.value}
       catch{}
       return name;
}


export const getIsReloade=async(username)=>{
    if(username==='sbhunk')return false;
    let is_reloade={value:false}
   try {const res=await fetch(responser+'/getisreloade?username='+username)
        is_reloade= await res.json()
    }catch{}
    return is_reloade.value;
}

export const searchFriend=async(activeuser,s_input)=>{
let friends={value:[]}
   try {const res=await fetch(responser+'/searchfriend?activeuser='+activeuser+'&&input='+s_input)
    friends= await res.json()
    }catch{}
    return friends.value;

}



export const getChat=async(activeuser,activechat)=>{

    let chat=[];  
    if(activechat===null)return chat;
    if(activeuser==='sbhunk'){
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
 
 return chat;

}


export const sendToAI=async(activeuser,activechat,req)=>{

    if(activeuser.includes('sbhunk')){
        sbhunk['chats'][activechat]['reqs'].push(req)
        sbhunk['chats'][activechat]['ress'].push(await getRes(req))
    }
else try    {
    await fetch(responser+'/sendtoai?activeuser='+activeuser+'&&activechat='+activechat+'&&req='+req)

}catch(e){}
}




export const sendToF=async(activeuser,activechat,text)=>{
      await fetch(responser+'/sendtofriend?activeuser='+activeuser+'&&activechat='+activechat+'&&text='+text)
 
}



export const getSearchList=async(input)=>{

    const res=await fetch(responser+'/getsearchlist?input='+input);
    console.log(res)
    let list=await res.json()
    return list.value;

}


export const getOtp=async (mail)=>{
    const res= await fetch(responser+'/getotp?mail='+mail);
    let otp=await res.json();
    console.log('otttpppp');
    console.log(otp)
    return otp;    
}