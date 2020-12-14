const http = require('http');

const server = http.createServer(function (req, res) {  // req = request and res = response
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello FROM my Node.js Server!!!!</h1> </body>')
    res.write('</html>');
    res.end();
})

server.listen(3000);
