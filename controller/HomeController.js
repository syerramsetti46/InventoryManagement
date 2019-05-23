const Device = require('../Models/Device');
const rootDir =require('../Util/path');
const path=require('path');
//const Device = require('../Models/Device');

//const mongoose=require('mongoose');
//cont bodyParser = require('body-parser');


exports.getAllDevices=(req,res,next)=> {
    Device.find({},function(err,device){
        if(err)
        res.send(err);
        res.json(device);
    });
   // res.sendFile(path.join(__dirname,'../','Views','Home.html'));

};
exports.getDevicesList=(req,res,next) => {
    
        Device.find().then(devices=> {
            console.log(devices);
            res.sendFile(path.join(__dirname,'../','Views','Home.html'));
        }).catch(error=>{
            res.sendFile(path.join(__dirname,'../','Views','404.html'));
        });
       /* connection.db.listCollections().toArray(function (err, collectionNames) {
          if (err) {
            console.log('Big error'+err);
            return;
          }
            console.log(collectionNames);
            
            connection.close();
            res.sendFile(path.join(__dirname,'../','Views','Home.html'));
          
        });*/
   // });
  };

 
 