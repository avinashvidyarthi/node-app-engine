const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Hello World!'
  })
});

app.get('/ping', (req, res) => {
	res.json({
		status: 'ok',
		message: 'pong',
	});
});

app.listen(port,()=>{
  console.log('Server listening on port:', port);
})