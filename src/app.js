var React = require('react');
var Catalog = React.createFactory(require('./views/catalog.jsx'));
if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(Catalog(), document.getElementById('content'));
  }
}