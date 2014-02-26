var EtsyItem = Backbone.Model.extend({
	//parse over items and _.filter those that are commercial ceramics??? does esty mark these somehow?
});

var ItemsCollection = Backbone.Collection.extend({
	model: EtsyItem,

	//Only need if we end up saving data (i.e. make price chart)
	//url: 'http://tiny-pizza-server.herokuapp.com/collections/jens-etsy-items',

	//comparator by price? or maybe a sort btn instead?
});