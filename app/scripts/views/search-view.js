var SearchView = Backbone.View.extend({
	className: "search-list",

	createTemplate: _.template($('#search-template').text()),

	events:{
		'click .js-search-btn': 'getResults'
	},

	initialize: function(){

		$('.js-main-view').empty();
		$('.js-main-view').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	},

	getResults: function(){
		var searchWord = $('.js-keyword-search').val();
		var link = '#search/results/' + searchWord;
		if (searchWord !== '') {
			this.$el.find('.js-search-btn').attr('href', link);
		}
	}
});

// if (keyword) {
// 			this.items.url = 'https://api.etsy.com/v2/listings/active.js?keywords=ceramic,pottery,' + keyword + '&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&callback=?';
// 		}

// 		this.items.fetch();