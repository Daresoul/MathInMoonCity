/****************************************
******************MODULES****************
****************************************/
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var pass = "!Kebabdk400";
var dburi = 'mongo "mongodb://gettingstarted-shard-00-00-uzzhc.mongodb.net:27017,gettingstarted-shard-00-01-uzzhc.mongodb.net:27017,gettingstarted-shard-00-02-uzzhc.mongodb.net:27017/test?replicaSet=GettingStarted-shard-0" --ssl --authenticationDatabase admin --username Kebabdk400 --password !Kebabdk400"';

/****************************************
***********SENDING FILES*****************
****************************************/

app.use(express.static(__dirname + '/Client'))

http.listen(3000, function(){
  console.log('listening on *:3000');
});

/****************************************
***********SOCKET.IO (Handling users)****
****************************************/

io.on('connection', function(socket)
{
  console.log('a user connected');
});

/****************************************
***********DATABASE**********************
****************************************

MongoClient.connect(dburi, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});*/
