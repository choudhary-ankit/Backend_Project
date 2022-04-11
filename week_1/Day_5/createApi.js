var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("{'name': 'John', 'age': 25}");
    res.end();
  })
  .listen(8000);
