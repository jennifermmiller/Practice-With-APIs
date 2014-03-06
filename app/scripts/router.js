var MainRouter = Backbone.Router.extend({
	routes: {

		'': 'index',
		'items/:id': 'focusOnItem',
		'search/:keyword': 'showSearch',
	},

	initialize: function(){
		this.items = new ItemsCollection();

		this.items.on('add', function(item){
			new ListView({model: item});
		});
	},

	index: function(){
		this.items.fetch();
	},

	focusOnItem: function(id){
		var focusItem = this.items.find(function(item){
			return item.get('listing_id') == id;
		});

		new FocusView({model:focusItem});
	},

	showSearch: function(keyword){

		$('.item-list-version').empty('');
		$('.list-header').html('Shopping '+ keyword +' items:');

		this.items.url += ','+ keyword;

		this.items.fetch();

	}	
});