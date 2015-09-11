var React   = require('react');
var Item   = require('./CatalogItem');

var Catalog = React.createClass({

  getDataFromServer: function() {
    return require('../data');
  },

  render: function() {
    var data = this.getDataFromServer();

    var items = data.map(function(item) {
      console.log(item.img)
      return <Item
                img={item.img}
                name={item.name}
                price={item.price}
                liked={item.liked} />
    });

    return (
      <div className='catalog'>
        {items}
      </div>
    )
  }
});

module.exports = Catalog;