var http = require('http');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var app = express();
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
app.use(cors())

app.get('/', (req, res) => {
  var directory = './image'; 
	fs.readdir(directory, (err, files) => {
    // var yair
    // for(i = 0 ; i<files.length; i++){
    //   yair +='<img src="./image/'+files[i]+'">'
      
    // }
    res.send({"res":files})
  })
});




 
