const http =require('http');
const reqhand=require('./routes');
const mongoData=require('./Util/database')


const newServer=http.createServer(reqhand.handler);

newServer.listen(3000);

const reqHandler =(req,res)=>{

    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Greetings!</title></head>');
        res.write('<body><h1>Hello welcome to my Application</h1>');
        res.write('<form action="/CreateUser" method="POST">UserName:<input type="text" name="UserName"><button type="submit">submit</button></form>');
        res.write('</body></html>');

        //console.log(req);
        return res.end();
    }
    else if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>Greetings!</title></head>');
        res.write('<body><h1>Users List:</h1>');
        res.write('<ul><li>sravz p</li><li>kesava P </li><li>pavan p </li><li>Rani Y</li></ul>');
        res.write('</body></html>');
        return res.end();

    }
    else if(url==='/CreateUser'){
        const body=[];
        req.on('data',chunk=> {
            body.push(chunk);
        });
        req.on('end',()=>{
            const message = Buffer.concat(body).toString();
            const inputData=message.split('=');
            console.log(`UserName is :${inputData[1]}`)

        });
        //console.log(req);
        return res.end();
    }

    
};

exports.handler=reqHandler;