//Better way to inject a new background color into to page? (see template) 
//Set up css transition b/n changing views

var FocusView = Backbone.View.extend({

	className: 'focus-view',

	createTemplate: _.template($('#focus-view-template').text()),

	initialize: function(){	
		$('.js-main-view').html(this.el); 

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},
});
