var Mn = require('backbone.marionette');
var $ = require('jquery');
require('../less/style.less');

// Create our Application
var app = new Mn.Application();

// Start history when our application is ready
app.on('start', function() {
  console.log("Ready to serve!")
});

$(function(){
    app.start();
});

