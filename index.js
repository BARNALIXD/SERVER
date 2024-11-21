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
const url = require('url'); 

const myServer = http.createServer(function (req, res) {
   if (req.url === "/favicon.ico") return res.end();
   const log = '${Date.now()}: ${req.url} New req Received\n' ;
   const myUrl = url.parse(req.url);
   console.log(myUrl);
   fs.appendFile('log.txt', log, (err, data) => {
      switch(myUrl.pathname) {
         case '/': res.end("Hello from the HOME PAGE"); 
         break;
         case '/about': res.end("hy my name is barnali das");
         break;
         case '/login': res.end("helo from the login page"); 
         break;
         default:
            res.end("404 Not found");
      }
   });
   
});


myServer.listen(8000, () => {
   console.log("Server is running on port 8000");
});
