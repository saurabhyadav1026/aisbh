

// the index of reusts key list and response should be same

const requestes = [

   {reqs: ['hello',"hii",'hi'],
    res:"Hello! sir, How can I help you?"
   },
   {reqs:  ["your","name","tell","me","about","you","invented","do","ability"],
    res:"I am a AI, A invention of SbhTechHub whoese owner is Mr. Saurabh Yadav.I am here to assist you. "
   },
   {reqs: ["news","inforamtion","today"],
    res: " sorry, i dont have current information but i will provide you some websites to get it."
   },
   {reqs:  ["joke","happy","laugh","sad"],
    res:"For making you happy here is some jokes for you... "
   },
   {reqs:  ["shayri","shayar"],
    res:"shayriya... here is present some shayries for you...."
   },
   {reqs: ['thankyou','good','work','nice'],
    res:"I am glad to satisfy you. Thankyou , You can ask anything whenever you want."
   },
   {reqs:   ["you","bad","wrong"],
    res: "I appolige for this interruption , currently i am testing version, I will improve myself.you can ask another one... "
   },
]









export const getRes = (req) => {
                                                // req= input split list  
  const  t = []                                 // list to store  match counts of key in reuests list
    for (let i = 0; i < requestes.length; i++) {        // loop for reuests list
        t[i] = 0;
        req.forEach(r => {
            if (r.length>2&&requestes[i].reqs.includes(r))               // to match with req key list
                t[i]++;
        });
        if (t[i] === req.length)return requestes[i].res;    // for exact match
    }
    let max=0;
    for (let i=0;i<t.length;i++){
        if(t[i]>t[max])max=i;               // to find the max matching index of requests list
    }
    return requestes[max].res;          // to return the response having  max matching 

}

export default getRes;