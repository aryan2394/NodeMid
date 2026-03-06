const http=require("http");
const path=require("path");
const fs=require("fs");
const os=require("os");
const { json } = require("stream/consumers");
const logFileShriji=path.join(__dirname,"visitorsShriji.log");
const backUpFileShriji=path.join(__dirname,"backupShriji.log");
console.log(backUpFileShriji,logFileShriji)
const serverShriji=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.end("Visitors Log Server Running by Shri ji")
    }
    else if(req.url=="/visit")
    {
        const log=`Visitor vised by shri ji on ${new Date().toLocaleString()} \n`;
        fs.appendFile("visitorsShriji.log",log,(err,shriji)=>
        {
            if(err)
                res.end("error in you telling by shri ji");
            else
                res.end("shriji")
        })
    }
    else if(req.url=="/logs")
    {
        fs.readFile("visitorsShriji.log","utf-8",(error,shriji)=>
        {
            if(error)
                res.end(shriji)
            else
                res.end("shriji is raeding")
        })
    }
    else if(req.url=="/copy-logs")
    {
        fs.copyFile("visitorsShriji.log","backupShriji.log",(err)=>
        {
            if(err)
                res.end("not copying shri ji data who is not sharnagati")
            else
                res.end("shriji copy ")
        })
    }
    else if(req.url=="/system-info")
    {
        const shriji={
            hostname:os.hostname(),
            platform:os.platform(),
            cpuModel:os.cpus()[0].model,
            cpuCores:os.cpus().length,
            totalMemory:os.totalmem().toFixed(2),
            leftMemory:os.freemem().toFixed(2),
        }
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(shriji,null,2));
    }
})
serverShriji.listen(3000,()=>
{
    console.log("shriji is server on ")
})
