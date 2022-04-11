var http = require("http");
var us = require("upper-case");
http
  .createServer(function (req, res) {
    const name = us.upperCase("sachin");
    res.write(name);
    res.end();
  })
  .listen(8000);
