const mongoConnect=require('mongoose');

const Schema= mongoConnect.Schema;

const deviceTypeSchema=new Schema({
    Id:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String
    },
    IsDeleted:{
        type:Boolean,
        required:true
    }
});

module.exports=mongoConnect.model('DeviceType',deviceTypeSchema)