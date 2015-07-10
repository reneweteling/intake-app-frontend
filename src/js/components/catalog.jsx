var React = require('react');
var Catalog = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Catalog</h1>
        <div>
          <button onClick={this._add}>Add to Cart</button>
        </div>
      </div>
    )
  },

  _add: function() {
    alert('added to your cart!');
  }

});

module.exports = Catalog;