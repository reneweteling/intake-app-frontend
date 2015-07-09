var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
  RaisedButton = mui.RaisedButton,
  LeftNav = mui.LeftNav
  MenuItem = mui.MenuItem,
  AppBar = mui.AppBar;

var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://github.com/callemall/material-ui', 
     text: 'GitHub' 
  },
  { 
     text: 'Disabled', 
     disabled: true 
  },
  { 
     type: MenuItem.Types.LINK, 
     payload: 'https://www.google.com', 
     text: 'Disabled Link', 
     disabled: true 
  },
];

 
var Material = React.createClass({
 
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
 
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
 
  render: function() {
    return (
        <div>
          <LeftNav menuItems={menuItems} />
          <AppBar title='Title' iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <RaisedButton label="Default" />
        </div>
    );
    // LeftNav.toggle()
    // 

  }
 
});
 
module.exports = Material;