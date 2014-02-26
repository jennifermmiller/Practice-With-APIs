var FocusView = Backbone.View.extend({

	className: 'jumbotron',

	createTemplate: _.template($('#focus-view-template').text()),

	initialize: function(){
		//$('js-main-view').empty();
		$('.js-main-view').html(this.el); //IM so dumb! only want one at a time thus html!

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	}
});