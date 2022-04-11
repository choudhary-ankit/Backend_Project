var http = require("http");
const data = {
  name: "John",
  age: 25,
  city: "New York",
  country: "USA",
  mail: "testankit@acadza.com",
};
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8000);
