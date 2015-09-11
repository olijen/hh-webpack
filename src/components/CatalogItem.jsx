var React = require('react');

var CatalogItem = React.createClass({

  toggleLiked: function() {
  	console.log('toggle liked');
    this.setState({
      liked: !this.state.liked,
    });
  },

  getInitialState: function() {
    return {
      liked: false
    }
  },

  render: function() {
    return (
  	  <div className='item col-xs-6 col-md-3'>
        <h3>{this.props.name}</h3>
  	    <img src={this.props.img} />
        <div className='price'>{this.props.price}</div>
  	    <div className='bar'>
  	      <button
  	      	onClick={this.toggleLiked}
  	      	className={this.state.liked ? 'btn btn-danger' : 'btn'} >
  	        ♥
  	      </button>
  	    </div>
  	  </div>
    )
  }
});

module.exports = CatalogItem;