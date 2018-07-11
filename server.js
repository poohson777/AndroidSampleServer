var express = require("express");

var app = express();

app.use(express.static('public'));//폴더명

app.listen(3000,()=> {
    console.log("3000 server run...");
})