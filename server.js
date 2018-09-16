var express = require('express');
var app = express();
var socket = require('socket.io');


var server = app.listen(process.env.PORT || 8888, function(){
    console.log('server is running ok ....');
})
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
}); 

var io = socket(server);
users = [];
connections = [];

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
   
    // new user
    socket.on('new user', function(data){
        
        socket.username = data;
        users.push(socket.username);
        updateUsernames();// Notify to all client to update list users online
        socket.broadcast.emit('join room', data)
    
    })
    
    // notify someone typing to all clients
    socket.on('typing', function(data){
        socket.broadcast.emit('someoneTyping', socket.username);
    })
       
    //Send message
    socket.on('send message', function(data){
        
        //send to myself
        socket.emit('me-new-msg', {msg: data, user: socket.username} )
        //send to other clients except me
        socket.broadcast.emit('new-msg', {msg: data, user: socket.username} );

    })
    
    socket.on('disconnect', function(data){
    
        // xoa user do trong mang users online
        socket.broadcast.emit('user-left', socket.username);
        users.splice(users.indexOf(socket.username), 1);   
        updateUsernames();
        
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length );
       
        
    })
    function updateUsernames(){
        io.sockets.emit('get user', users);
    }

 
    
})






