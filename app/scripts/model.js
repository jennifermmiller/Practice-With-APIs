var Item = Backbone.Model.extend({});

var ItemsCollection = Backbone.Collection.extend({
	model: Item,

	url: 'https://api.etsy.com/v2/listings/active.js?&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&callback=?&keywords=ceramic,pottery',

	parse: function(response){
		return response.results;
	},

	// initialize: function(){
	// 	this.on('add', function(item){
	// 		new ListView({model: item});
	// 	});
	// },

	comparator: function(a,b) {
	   var a = parseFloat(a.get('price')),
	       b = parseFloat(b.get('price'));

	   if (a == b) return 0;

	   return a > b ? 1 : -1;
	}
});


	//Only need if we end up saving data (i.e. make price chart)
	//url: 'http://tiny-pizza-server.herokuapp.com/collections/jens-etsy-items',
