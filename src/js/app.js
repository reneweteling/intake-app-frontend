var React                 = require('react'),
    Backbone              = require('backbone'),
    Layout                = require('./components/layout.jsx'),
    Login                 = require('./components/login.jsx'),
    Router                = require('react-router'),
    Route                 = Router.Route,
    mui                   = require('material-ui'),
    injectTapEventPlugin  = require("react-tap-event-plugin"),
    ThemeManager          = new mui.Styles.ThemeManager();

//Needed for onTouchTap 
//Can go away when react 1.0 release 
//Check this repo: 
//https://github.com/zilverline/react-tap-event-plugin 
injectTapEventPlugin();

// http://rackt.github.io/react-router/#Redirect
// https://github.com/cofounders/backbone-session

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _layout: function(){
    document.location.href='#/layout';
  },
  _login: function(){
    document.location.href='#/login';
  },
  render () {
    return (
      <div>
        <mui.RaisedButton label="Layout" primary={true} onClick={ this._layout } />
        <mui.RaisedButton label="Login" primary={true} onClick={ this._login } />
        <RouteHandler/>
      </div>
    )
  }
});


var routes = (
  <Route path="/" handler={App}>
    <Router.DefaultRoute handler={Login}/>
    <Route path="login" handler={Login}/>
    <Route path="layout" handler={Layout}/>
  </Route>
);    

var RouteHandler = Router.RouteHandler;


Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.body);
});
   