const mongoConnect = require('mongoose');

const mongoURI = 'mongodb+srv://sravanthi:llZtRzFtdqq4c2J5@inventorymanagament-ljjv1.mongodb.net/DeviceManagment?retryWrites=true'
// notice the mongoose.createConnection instead of mongoose.connect

const conn = mongoConnect.createConnection(mongoURI,{useNewUrlParser: true});
exports.conn = conn;
