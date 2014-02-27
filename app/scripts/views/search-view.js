var SearchView = Backbone.View.extend({
	
	
	events:{
		'search/:keyword' : "showSearchResults"
	},

	initialize: function(){
		setKeyword();

		$('.search-results').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},

	showSearchResults: function(keyword){
		if (keyword) {
			this.items.url = 'https://api.etsy.com/v2/listings/active.js?keywords=ceramic,pottery,' + keyword + '&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&callback=?';
		}

		this.items.fetch();
	},

	setKeyword: function(){
		var keyword = $('.js-keyword-search').val();
		var link = '#/search/' + keyword;
		$('.js-search-btn').attr({href: link});
	}
})