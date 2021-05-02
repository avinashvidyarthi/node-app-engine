const http = require('http');
const port = process.env.PORT || 3000;
http.createServer(function (req, res) {
  res.write('Hello World Updated!'); 
  res.end(); 
}).listen(port); 