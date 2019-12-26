const express = require('express');
const path = require('path');
const app = express();
const port = 5000

app.use(express.static(__dirname + '/dist/weatherApp'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/weatherApp/index.html'));
});


app.listen(process.env.PORT || 5000)
console.log("listening on port %d...", port)