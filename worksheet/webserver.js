const express = require('express');
const app = express();

app.get('/subtract', function (req, res) {
  res.send(String(Number(req.query.a) - Number(req.query.b)));
});

app.get('*', function (req, res) {
    res.statusCode = 404;
    res.send("Not found!");
});

app.listen(8080);
