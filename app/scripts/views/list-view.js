var ListView = Backbone.View.extend({
	tagName: 'a',

	className: 'js-item-list-version item-list-version',

	createTemplate: _.template($('#list-view-template').text()),

	initialize: function(){
		this.setHrefAttr();

		$('.js-list-of-items').append(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},

	setHrefAttr: function(){
		var id = this.model.get('listing_id');
		var link  = '#/items/' + id;
		this.$el.attr({href: link});
	},
});

	