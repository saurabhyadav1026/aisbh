

import Tesseract from 'tesseract.js';



 const getImageText=async(file)=>{

     if (!file) return;
    
     let text = await Tesseract.recognize(
      file,
      'eng', // language
      {
        logger: (m) => console.log(m), // optional progress logs
      }
    ).then(({ data: { text } }) => {
      return text;
      
    });

return text;
}

export default getImageText;