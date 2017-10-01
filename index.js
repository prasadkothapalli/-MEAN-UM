const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/test', (err) => {
mongoose.connect(config.uri, {useMongoClient: true}, (err) => {
    if(err){
        console.log('Unable to connect to the db');
    }else{
        console.log('connected to db :: ' + config.db);
    }
});


app.use(express.static(__dirname + '/client/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});


//http://localhost:8080
app.listen(8080, () => {
    console.log('App Server Listening on port 8080');
});   