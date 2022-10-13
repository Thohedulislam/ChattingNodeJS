const express = require('express');
const app = express();
var http = require('http').createServer(app);

app.get('/css/style.css',(req, res)=>{
    res.sendFile(__dirname + '/css/style.css');
});
app.get('/js/main.js',(req, res)=>{
    res.sendFile(__dirname + '/js/main.js');
});
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/contactus.html');
});
http.listen(1111, ()=>{
    console.log("server ruuning on http://localhost:1111");
});
