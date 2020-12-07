const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('./passport');
const session = require('express-session')

const user = require('./routes/user')


// var cors = require('cors');
// app.use(cors())
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		// store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)
 app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
app.use('/user', user)

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/thoughtbubblelist",
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
