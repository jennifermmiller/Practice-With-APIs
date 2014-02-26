var MainRouter = Backbone.Router.extend({
	routes:{
		"" : "showList",
		"items/:id": "focusOnItem"
	},

	initialize: function(){
		console.log('Aye Aye Cap\'n, the router\'s on-line!');
	},

	showList: function(){
		$('.js-list-of-items').empty();

		etsyItems.each(function(item){
			new ListView({model:item});
		});
	},

	focusOnItem: function(id){
		var focusItem = etsyItems.find(function(item){
			return item.get('listing_id') == id;
		});

		new FocusView({model: focusItem});
	}
});