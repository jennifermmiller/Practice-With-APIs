var MainRouter = Backbone.Router.extend({
	routes: {

		'': 'listItems',
		'items/:id': 'focusOnItem',
		'search/:searchWord': 'showResults'
	},

	initialize: function(){
		this.items = new ItemsCollection();
	},

	listItems: function(){

		this.items.fetch();
	},

	focusOnItem: function(id){
		var focusItem = this.items.find(function(item){
			return item.get('listing_id') == id;
		});

		new FocusView({model:focusItem});
	},

	showResults: function(searchWord){

		$('.item-list-version').empty('');

		this.items.url += ',' + searchWord;

		this.items.fetch();
	}	
});