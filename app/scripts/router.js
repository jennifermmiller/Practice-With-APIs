var MainRouter = Backbone.Router.extend({
	routes: {

		'': 'listItems',
		'items/:id': 'focusOnItem',
		'search/': 'searchItems',
		'results/:searchWord': 'showResults'
	},

	initialize: function(){
		window.items = new ItemsCollection();
	},

	listItems: function(){
		
		items.fetch();
	},

	focusOnItem: function(id){
		var focusItem = items.find(function(item){
			return item.get('listing_id') == id;
		});

		new FocusView({model:focusItem});
	},

	searchItems: function(){
		console.log('anything?');
		new SearchView();
	},

	showResults: function(){
		console.log('here?');
		
		var searchWord = ('.js-keyword-search').val();
		
		$('.item-list-version').empty('');
		
		items.url = 'https://api.etsy.com/v2/listings/active.js?api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&limit=50&callback=?&keywords=ceramic,pottery,'+ SearchWord;

		items.fetch();

		items.each(function(item){
			new ListView({model: item});
		});
	}	
});