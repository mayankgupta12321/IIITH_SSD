const express = require('express');
const http = require('http');
const app = express();
const port = 3000;
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login');

const cors = require('cors');

var config = require('./config');
const mongoose = require('mongoose');
const mongoUrl = config.mongoUrl;


app.use(cors());

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    console.log("Error while connecting...");
  }

function onListening() {
    console.log("Listening on port 3000");
}

mongoose.connect(mongoUrl, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then((db) => {
    console.log("Connected...");
}, (err) => {
    console.log("Error!!!");
});

// app.use('/', indexRouter);  
app.use('/signup', signupRouter);
app.use('/login', loginRouter);


