const mongoose = require('mongoose');
require('dotenv').config();

function newConnection(uri){
    const con = mongoose.createConnection(uri);

    con.on('connected',function(){
        console.log(`MongoDb:::connected:::${this.name}`)
    });
    
    con.on('disconnected',function(){
        console.log(`MongoDb:::disconnected:::${this.name}`)
    });
    
    con.on('error',function(error){
        console.log(`MongoDb:::error:::${JSON.stringify(error)}`)
    })
    
    return con;
}

//connect db test
const testConnection = newConnection(process.env.URI_MONGODB);
module.exports = {
    testConnection
};
