//Better way to inject a new background color into to page? (see template) 

var FocusView = Backbone.View.extend({

	className: 'focus-view',

	createTemplate: _.template($('#focus-view-template').text()),

	initialize: function(){	
		$('.js-main-view').html(this.el); //IM so dumb! only want one at a time thus html!

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},
});
