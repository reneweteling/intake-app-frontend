var Backbone              = require('backbone'),
    mui                   = require('material-ui'),
    home                  = require('./components/home.jsx'),
    login                 = require('./components/login.jsx');


module.exports = Backbone.Router.extend({

  routes: {
    "" :             "home",
    "login":         "login",
    "logout":        "logout"
  },

  home: function() {
    window.content = home;
  },

  login: function() {
    window.content = login;
  },

  logout: function(query, page) {
    alert(query);
  }

});