var React         = require('react'),
    mui           = require('material-ui'),
    ThemeManager  = new mui.Styles.ThemeManager();


var login = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _submit: function(e){
    console.log( this.refs.email.refs );
    console.log( this.refs.email.clearValue() );
  },
  render: function() {
    return (
      <form onSubmit={this._submit} ref="form">
        <fieldset>
          <mui.TextField
            multiLine={false}
            ref="email"
            hintText="E-mail"
            defaultValue="Fill in your e-mail"
            floatingLabelText="Fill in your e-mail" >
            <input type="email" />
          </mui.TextField> <br />
          <mui.TextField
            ref="password"
            name="passord"
            hintText="Password"
            defaultValue="Fill in your password"
            floatingLabelText="Fill in your password">
            <input type="password" />
          </mui.TextField> <br />
          <mui.RaisedButton label="Login" name="ast" primary={true} onClick={ this._submit } />
        </fieldset>
      </form>
      );
  }

});

module.exports = login;