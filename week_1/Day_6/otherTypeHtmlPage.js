var http = require("http");
const page = `<h1>Hello World</h1>
<p>This is my first page</p>
<input type="text" id="myInput">
<button onclick="myFunction()">Click me</button>`;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(page);
    res.end();
  })
  .listen(8000);
