const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const restaurant_router = require('./routes/restaurant'); 
const product_router = require('./routes/product'); 
const product_category_router = require('./routes/product.category'); 


// * MiddleWares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));

app.use('/restaurant', restaurant_router);
app.use('/product', product_router);
app.use('/product_category', product_category_router);


module.exports = app;