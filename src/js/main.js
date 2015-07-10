var React       = require('react'),
    Flux        = require('flux'),
    Material    = React.createFactory(require('./components/material.jsx'));
// var injectTapEventPlugin = require("react-tap-event-plugin");
// var Fluxxor = require("fluxxor");

// //Needed for onTouchTap 
// //Can go away when react 1.0 release 
// //Check this repo: 
// //https://github.com/zilverline/react-tap-event-plugin 
// injectTapEventPlugin();



if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(Material(), document.getElementById('content'));
  }
}

