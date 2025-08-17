


import express from 'express';
import {User} from './dbschema.js'
import getBotRes from '.././controll/getBotRes.js';


const usersRoute =  express.Router();


usersRoute.post('/newuser',async(req,res)=>{
 const new_user=  new User(req.body);
 await new_user.save();
  res.json({value:"done"})
});





usersRoute.get('/newchat',async(req,res)=>{

const us=await User.findOne({username:req.query.activeuser})
const c=us.chats;
const unread=us.unread;
if(req.query.activechat.includes('sbhai')) c[req.query.activechat]={name:req.query.activechat,reqs:[],ress:[]};
else if(c[req.query.activechat]){}      // for if already have chat with acitivechat
else {
   c[req.query.activechat]=[];
   unread[req.query.activechat]=0;
}
await User.updateOne({username:req.query.activeuser},{$set:{chats:c,unread:unread}})
 res.json({value:"done"})

});


usersRoute.get('/checkisusernameavailble',async(req,res)=>{
  let value=true;
  const temp=await isUserAvailble(req.query.username)
  if(temp||req.query.username.includes('sbhai')||req.query.username==='sbhunk'){
    value=false;
      }
  
  res.json({value:value,username:req.query.username})
})

usersRoute.get('/getchatslist',async(req,res)=>{
const us=await User.findOne({username:req.query.activeuser});
const chats=Object.keys(us['chats']);
let chat_list=[];
for (let i=0;i< chats.length;i++){

    if(chats[i].includes('sbhai'))chat_list.push({username:chats[i],name:us['chats'][chats[i]].name,unread:0})
        else {
     let name=await User.findOne({username:chats[i]})
     name=name.name;
    
          chat_list.push({username:chats[i],name:name,unread:us['unread'][chats[i]]})
        }
}
res.json({value:chat_list});
});



  





usersRoute.get('/getname',async(req,res)=>{

   const u=await User.findOne({username:req.query.username})
    res.json({value:u['name']});

})


usersRoute.get('/getisreloade',async(req,res)=>{

   const u=await User.findOne({username:req.query.username})
    res.json({value:u['isReloade']});

})


usersRoute.get('/verifyuser',async(req,res)=>{
 const u=await User.findOne({username:req.query.username})
 let v=false;
    if(u&&u['userpassword']===req.query.userpassword) v=true 
  
res.json({value:v});
    
})


usersRoute.get('/searchfriend',async(req,res)=>{

    const users=await User.find();
    let friends=[];
    let j=1;
  for(let i=0;i<users.length;i++){
if(users[i].username.includes(req.query.input)) {friends.push({username:users[i].username,name:users[i].name})
j++;
if  (j===5)break; }
}

res.json({value:friends})
})


usersRoute.get('/getchat',async (req,res)=>{
  let chat=[];
    const user=await User.findOne({username:req.query.activeuser})
if(req.query.activechat.includes('sbhai')){
  user['chats'][req.query.activechat.toString()]['reqs'].forEach((r,i)=>{
            let rr=user['chats'][req.query.activechat]['ress'][i]
            chat.push({by:1,text:r},{by:2,text:rr})
         
}
  )}
  else chat=user['chats'][req.query.activechat]

    res.json({value:chat});
    
})






usersRoute.get('/sendtoai',async (req,res)=>{
  const user=await User.findOne({username:req.query.activeuser})
    
    const c=user['chats'];
    c[req.query.activechat]['reqs'].push(req.query.req);
    c[req.query.activechat]['ress'].push(getBotRes(req.query.req));
    await User.updateOne({username:req.query.activeuser},{$set:{chats:c}})
  
   res.json({value:"done"})
})

// fo genai getGenRes(req.query.req)

usersRoute.get('/sendtofriend',async(req,res)=>{

      const user1=await User.findOne({username:req.query.activeuser})    
    const c1=user1['chats'];    
    c1[req.query.activechat].push({time:"22",by:1,text:req.query.text,status:0});
    await User.updateOne({username:req.query.activeuser},{$set:{chats:c1}})
    if(!(req.query.activeuser===req.query.activechat)){
    const user2=await User.findOne({username:req.query.activechat})
     const c2=user2['chats'];    
console.log(11)
    if(!user2['chats'][req.query.activeuser])c2=[{time:"22",by:2,text:req.query.text}]
    else c2.push({time:"22",by:2,text:req.query.text});
  user2['unread'][req.query.activeuser]+=1
      console.log(12)
    await User.updateOne({username:req.query.activechat},{$set:{chats:c2,isReloade:true}})
        }    
       console.log("okkkkk") 
        res.json({value:"done"})

})






export default usersRoute




const isUserAvailble=async(username)=>{
let users=await User.find();
for (let i=0;i< users.length;i++){
  if(users[i].username===username||username.includes('sbhai')||username==='sbhunk'){
    value=false;
    break;
  }
}
}