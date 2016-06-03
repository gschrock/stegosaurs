//Set up express.
var express = require('express');
var app = express();
var jwt = require('express-jwt');
var cors = require('cors');
var port = process.env.PORT || 4000;
var morgan = require('morgan');


// Set up mongoose
var mongoose = require('mongoose');
mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant';
mongoose.connect(mongoURI);




// Verify mongoose connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, "There's an error"));
db.once('open', function callback(){console.log('successfully logged into mongo');  });

// Middleware
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

var authCheck = jwt({
  secret: new Buffer('0UpBbiHuBz0B45N27qKkqhZnJcOrgHvT6y5kVUQl-O1GSuWisuN3RKKrxjwgvqky', 'base64'),
  audience: 'VJw1CCaxKJ4FdkqPamlBxUUrjuGapt8e'
});

// API endpoints
var handler = require('./handlers/handlers');

// use this route with review submit button
app.post('/api/restaurants', handler.addRestaurant); 

app.get('/api/private', handler.getRestaurantsByUser);

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

app.get('/api/restaurants', handler.getRestaurants);

app.get('/api/restaurants/:id', handler.getOneRestaurant);


app.put('/api/restuarants:id', handler.updateRestaurantInfo);

app.delete('/api/users/:id', handler.deleteRestaurant);

// Start server
var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening at port: ' + port);









// //exposes the id from mongodb to an API.
// app.get('/api/restaurant/:id', function(req, res){
//   Restaurant.findById(req.params.id, function(err, data){
//     res.json(data);
//   });
// });

// app.delete('/api/restaurant/:id', function(req, res){
//   Restaurant.remove({_id: req.params.id}, function(err, doc){
//     console.log(err);
//     console.log(doc);
//     Restaurant.findById(req.params.id, function(err, data){
//       res.json(data);
//     });
//   });
// });





