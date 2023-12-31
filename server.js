//simple http server set up
const http = require('http');

const hostname = 'localhost';
const port = 3000;
//creating simple server object using existing http.server class - takes request handler callback function as parameter
const server = http.createServer((req, res) => { //request handler called everytime server reeceives request, this request handler takes two arguments as parameter - request and response
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});