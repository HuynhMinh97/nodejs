const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const {testConnection} = require('../helpers/connection_multi_mongodb');
const UseSchema = new Schema({
    username:{
        type:String,
        lowercase:true,
        unique:true,
        require:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = {
    test:testConnection.model('users',UseSchema)
};
