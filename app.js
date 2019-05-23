const http =require('http');
const express=require('express');
const app =express();
const bodyParser=require('body-parser');
const path=require('path');
const rootDir =require('./Util/path');
const mongoose = require('mongoose');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET ,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers','contentType');
next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname,'Public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'Views','404.html'))
});
const port =process.env.PORT|| 4000;
mongoose.connect('mongodb+srv://sravanthi:llZtRzFtdqq4c2J5@inventorymanagament-ljjv1.mongodb.net/DeviceManagment?retryWrites=true',{useNewUrlParser: true})
.then(result=>{

    console.log('Connected to mongo server.');
    app.listen(port,()=> console.log(`listening on port ${port}`));
}).catch(err=>{
    console.log(err);
});



/*app.use((req,res,next)=>{
    console.log('test1');
    next();
});//use of nxt 
app.use ('/',(req,res,next)=> {
    console.log('running always.....');
    next();

});

app.use ('/addNewDevice',(req,res,next)=> {
    res.send('<h1>Add new Device </h1>')

});
const newServer=http.createServer(app);

newServer.listen(3000);**/
