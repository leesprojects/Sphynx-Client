const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/client/browser/'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/client/browser/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Project Sphynx Client listening at http://localhost:${process.env.PORT || 8080}`);
});
