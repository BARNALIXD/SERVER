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

const myServer = http.createServer((req,res) => {
   fs.appendFile("chick.txt", req.body, (err, data) => {
      res.end("hello from the server");
   })
   console.log("New req recieved");
   res.end("baby shark");
});


myServer.listen(8000, () => {
   console.log("Server is running on port 8000");
});
