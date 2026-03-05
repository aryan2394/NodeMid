const fs=require("fs");
// WRITE ON FILE
// 1st :synhonously matlab jab aapko aapko hai ki maine jo likha hai updated wlaa wo data chahaiye then use sysnocolus function

// aur ye data return karega beacuse humein return chhez ko use kara hai isliye toh humne sysnous use kiya hai 

// const shrijiDet=fs.writeFileSync("./lalju.txt","shri ji ka jeevan hai and shri ji hi likhegi,padhegi and sunegi");
// console.log(shrijiDet);

// 2nd:asyncnously mein aagar aapko hai ki mere ko kaam karna hai and jo kaam kar raha hu usse koi matlab nahi hai then use these 
// fs.writeFile("./lalju.txt","shriji ka jeevan hai",(error,result)=>
// {
//     if(error)
//         throw error;
//     else
//         console.log(result);
// })

// READ ON FILE

// const shriji=fs.readFileSync("./lalju.txt","utf-8")
// console.log(shriji);

// fs.readFile("./lalju.txt","utf-8",(err,shriji)=>
// {
//     if(err)
//         throw err;
//     else
//         console.log(shriji);
// })

// APPEND ON FILE
// fs.appendFileSync("lalju.txt","shriji ke charnarvind chahaiye mujhe baaki vikar aap dekh lo")

// DELETE A FILE
// fs.unlinkSync("./lalju.txt")

