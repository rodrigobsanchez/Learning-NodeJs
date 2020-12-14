/**
 * Starting a server in nodeJS
 **/

//require is the import... importing library http;
const http = require('http'); //always search global module name http (included at nodeJS library)

/*function rqListener(req, res){

}

http.createServer(rqListener);*/

//it could be like this...
const server = http.createServer(function (req, res) {
    console.log(req); //it will show the req when acessing browser localhost:3000
   // process.exit(); //end the process when acessing the server via browser;
})

server.listen(3000); // can be whatever port you choose.

