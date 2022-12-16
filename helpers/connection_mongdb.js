const mongoose = require('mongoose');
const con = mongoose.createConnection('mongodb+srv://firstapp:baominh@cluster0.zccpevu.mongodb.net/test');

con.on('connected',function(){
    console.log(`MongoDb:::connected:::${this.name}`)
});

con.on('disconnected',function(){
    console.log(`MongoDb:::disconnected:::${this.name}`)
});

con.on('error',function(error){
    console.log(`MongoDb:::error:::${JSON.stringify(error)}`)
})

process.on('SIGINT',async()=>{
    await con.close();
    process.exit(0);
})

module.exports = con;