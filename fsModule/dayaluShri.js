const fs=require("fs");
// read a file
fs.writeFile("lalju.txt","shriji shriji shriji...",(shriji,err)=>
{
    if(err)
        throw err;
    else
        console.log(shriji)
});
// fs.unlinkSync("lalju.txt");
console.log("priyapritam");
console.log("shriji")