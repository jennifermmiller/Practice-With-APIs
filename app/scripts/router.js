var MainRouter = Backbone.Router.extend({
	routes: {
		'': 'listItems',
		'items/:id': 'focusOnItem',
		'sort': 'sortItems'
	},

	initialize: function(){
		window.items = new ItemsCollection();
	},

	listItems: function(keyword){
		if(keyword){
			this.items.url = 'https://api.etsy.com/v2/listings/active.js?keywords=ceramic,pottery'+ keyword +'&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&limit=500&callback=?';
		}

		items.fetch();
	},

	focusOnItem: function(id){
		var focusItem = items.find(function(item){
			return item.get('listing_id') == id;
		});

		new FocusView({model:focusItem});
	},


});