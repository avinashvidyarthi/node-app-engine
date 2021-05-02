const http = require('http');
const port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(port); 