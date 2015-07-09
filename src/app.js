var React = require('react');
var Catalog = React.createFactory(require('./views/catalog.jsx'));
var Material = React.createFactory(require('./views/material.jsx'));
var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap 
//Can go away when react 1.0 release 
//Check this repo: 
//https://github.com/zilverline/react-tap-event-plugin 
injectTapEventPlugin();

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(Material(), document.getElementById('content'));
  }
}

