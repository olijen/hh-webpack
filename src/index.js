//
var React   = require('react');
//require('bootstrap');
require("bootstrap-webpack");
var $ = JQuery = require('jquery');
var Catalog = require('./components/Catalog');


require('./styles/index.css'); 

React.render(
    React.createElement(Catalog),
    document.getElementById('toolbar')
);
