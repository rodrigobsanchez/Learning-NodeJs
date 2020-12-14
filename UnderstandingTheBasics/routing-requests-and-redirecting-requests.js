const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) { // req = request and res = response
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message...</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send!</button></input></form> </body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        //redirecting and creating a file...
        const body = [];
        req.on('data', (chunk) => {     //.on() some king of eventListener.
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
})

server.listen(3000);


/**
 * ALL this examples is RAW LOGIC normally it wouldn't show all these logic.
 **/