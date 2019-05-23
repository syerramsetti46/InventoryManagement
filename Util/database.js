const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;

let _db;
const mongoConnect=callback=>{
    mongoClient.connect('mongodb+srv://sravanthi:llZtRzFtdqq4c2J5@inventorymanagament-ljjv1.mongodb.net/test?retryWrites=true')
    .then(client => {
        console.log('connected');
        _db=client.db();//you can specify the dbname if you want to connect to different db ....
        callback();
        })
    .catch(err=>{
        console.log(err);

        throw err;
    });
}; 

const getDB=()=>{
    if(_db){
        return _db;
    }
    throw 'No connections found!';
}

module.exports.mongoConnect=mongoConnect;
module.exports.getDB=getDB;