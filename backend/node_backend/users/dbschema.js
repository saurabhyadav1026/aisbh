import mongoose from "mongoose"



const userSchema= new mongoose.Schema(
{
    username:String,
    name:String,
    userpassword:String,
    contact:String, 
    chats:{ 
     }
    
    
}
)
export const User=mongoose.model('User',userSchema);

