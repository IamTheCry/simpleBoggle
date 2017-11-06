const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/src/client/index.html')
});

app.listen(3000, function () {
  console.log('simpleBoggle listening on port 3000!')
});

