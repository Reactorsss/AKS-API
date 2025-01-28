const express = require('express')
const app = express()
const getcontrol = require('./routes/routes')
const cors = require("cors");
require("dotenv").config()

var http = require("http");
var https = require("https");
var fs = require("fs");
var hostname = '0.0.0.0';
var port = 1144;

app.use(express.json({ limit: '5mb' }))
app.use(cors());
app.use('/aks', getcontrol)

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type", "Accept", "x-auth");
    res.setHeader("Access-Control-Allow-Method","GET , POST , PATCH , DELETE");
    next();
});

var options = {
//key: fs.readFileSync(__dirname + "/cert/pop-certgc.pub.pem"),
//cert: fs.readFileSync(__dirname + "/cert/pop-certgc.pri.pem"),
rejectUnauthorized: true
};

http.createServer(options, app).listen(port, hostname, () => {
console.log(`server running at http://${hostname}:${port}/`);
});