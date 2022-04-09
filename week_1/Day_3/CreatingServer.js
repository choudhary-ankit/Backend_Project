var http = require("http");
http
  .createServer(function (req, res) {
    res.write("Hello From Nodejs Server");
    res.end();
  })
  .listen(5000);
