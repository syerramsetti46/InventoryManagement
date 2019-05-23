const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const deviceSchema=new Schema({
    SerialNumber:{
        type: String,
        required: true
    },
    IMEINumber:{
        type:String,
        required:true
    },
    DeviceImage:{
        type:String,
        required:true
    },
    DeviceTypeId:{
        type:Number,
        required:true
    },
    DeviceStatusId:{
        type:Number,
        required:true
    },
    IsDeleted:{
        type:Boolean,
        required:true
    },
    IsWarranty:{
        type:Boolean,
        required:true
    },
    Notes:{
        type:String
    },
    PurchasedDate:{
        type:Date,
        required:true
    },
    WarrantyEndDate:{
        type:Date,
        required:true
    },
    PurchasedByUserId:{
        type:Number,
        required:true
    },
    InPosessionUserId:{
        type:Number,
        required:true
    },
    PurchasedFrom:{
        type:String
    }
});

module.exports = mongoose.model('Device', deviceSchema);