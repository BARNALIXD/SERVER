// const http = require('http');
// const fs = require('fs');

// const myServer = http.createServer((req,res) => {
//    const log = '${Date.now()}:New Req Recieved \n';
//    fs.appendFile("log.txt" , log, (err, data) => {
//       res.end("hello from the server Again");
//    });
   
// });



// myServer.listen(8000, () => {
//    console.log("Server is running on port 8000");
// });
const http = require('http');
const fs = require('fs');

const myServer = http.createServer(function (req, res) {
   const log = '${Date.now()}:New req Received\n' ;
   fs.appendFile('log.txt', log, (err, data) => {
      res.end("hello from the server")
   });
   
});


myServer.listen(8000, () => {
   console.log("Server is running on port 8000");
});
