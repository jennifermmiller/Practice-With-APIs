var Item = Backbone.Model.extend({});

var ItemsCollection = Backbone.Collection.extend({
	model: Item,

	url: 'https://api.etsy.com/v2/listings/active.js?keywords=ceramic,pottery&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&callback=?',

	parse: function(response){
		return response.results;
	},

	initialize: function(){
		this.on('add', function(item){
			new ListView({model: item});
		});
	}
});

	//Only need if we end up saving data (i.e. make price chart)
	//url: 'http://tiny-pizza-server.herokuapp.com/collections/jens-etsy-items',
