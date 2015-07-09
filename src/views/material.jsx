var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager();
  
var menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Resources' },
  { 
     type: mui.MenuItem.Types.LINK, 
     payload: 'https://github.com/callemall/material-ui', 
     text: 'GitHub' 
  },
  { 
     text: 'Disabled', 
     disabled: true 
  },
  { 
     type: mui.MenuItem.Types.LINK, 
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

  menuBtnClick: function(e){
    this.refs.leftNav.toggle();
  },
 
  render: function() {
    return (
        <div>
          <mui.LeftNav ref="leftNav" menuItems={menuItems} docked={false} />
          <mui.AppBar title='Title' onLeftIconButtonTouchTap={this.menuBtnClick} />
        </div>
    );
    
  }
 
});
 
module.exports = Material;