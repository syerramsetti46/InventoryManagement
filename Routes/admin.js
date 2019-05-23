
const express=require('express');
const router =express.Router();


const deviceController=require('../controller/DeviceController');


router.get ('/addNewDevice',deviceController.getDevicePage);
router.post ('/addNewDevice',deviceController.PostAddDevice);
router.get ('/GetDevice/:DeviceId',deviceController.getDevice);
//router.get ('/UpdateDevice/:DeviceId',deviceController.getDevice);
module.exports=router;