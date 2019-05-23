
const express=require('express');
const path =require('path');
const router =express.Router();

const homeController=require('../controller/HomeController');
router.get ('/',homeController.getAllDevices);

module.exports=router;