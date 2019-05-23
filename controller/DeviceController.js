const path=require('path');
const rootDir =require('../Util/path');
const Device = require('../Models/Device');

exports.getDevicePage=(req,res,next)=> {
    res.sendFile(path.join(rootDir,'Views','AddNewDevice.html'));

};

exports.PostAddDevice = ( req,res,next) => {
    
    var warrantyEndDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    //const warrantyEndDate=new Date();
 
    const device = new Device({
        SerialNumber: req.body.SerialNumber,
        IMEINumber: req.body.IMEINumber,
        DeviceImage: 'Test.jpg' ,
        DeviceTypeId:req.body.DeviceTypeId,
        DeviceStatusId:req.body.DeviceStatusId,
        IsDeleted:false,
        IsWarranty:req.body.IsWarranty,
        Notes:req.body.Notes,
        PurchasedDate:req.body.PurchasedDate,
        WarrantyEndDate:req.body.WarrantyEndDate||warrantyEndDate,
        PurchasedByUserId: req.body.PurchasedByUserId,
        InPosessionUserId: req.body.InPosessionUserId,
        PurchasedFrom:req.body.PurchasedFrom
    });
    
    device
      .save()
      .then(result => {
        console.log(result);
        console.log('Created Device');
        res.staus(201).json({message:'successfully created the new device'
           // post:{device:device }
        });
      })
      .catch(err => {
        console.log(`Error Message: ${err}`);
      });
  };


  exports.getDevice=(req,res,next)=> {
    const deviceId=req.params.DeviceId;
    //console.log(deviceId);
    Device.findById(deviceId).then(device=> {
          console.log(device);
          res.sendFile(path.join(__dirname,'../','Views','Home.html'));
      }).catch(error=>{
          console.log(`Error Message :${error}`);
      });
  };




  exports.updateDevice=(req,res,next)=> {
    const deviceId=req.body.DeviceId;
    //console.log(deviceId);
    Device.findById(deviceId).then(device=> {
          console.log(device);
          res.sendFile(path.join(__dirname,'../','Views','Home.html'));
      }).catch(error=>{
          console.log(`Error Message :${error}`);
      });
  };
