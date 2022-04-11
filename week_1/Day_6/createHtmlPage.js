var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<head>\n" +
        "<title>My First Page</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<h1>Hello World</h1>\n" +
        "<p>This is my first page</p>\n" +
        "</body>\n" +
        "</html>"
    );
    res.end();
}).listen(8000);