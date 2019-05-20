const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

//db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('DB Connected!'));

//when there is an error
mongoose.connection.on('error', err => console.log(`DB Connection error: ${err.message}`));

//bringing in routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(('/'), postRoutes);

const port = process.env.PORT || 8080;
app.listen((port), () => console.log(`The app is listening to port: ${port}`));