

import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';



dotenv.config();



const genAI = new GoogleGenerativeAI(process.env.GEN_API)





const getGenRes=async(prompt)=>{
let text="";
  console.log("enter")
    try {
     
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
      const result = await model.generateContent(prompt);
       text = await result.response.text();
      
       return text;
    } catch (err) {
      console.error(err);
   
    }
 
}



export default getGenRes;  