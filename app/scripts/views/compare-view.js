//idea: have two lists that user can use as search, maybe each displays own template, approx. each half of main view?

var CompareView = Backbone.View.extend({
	className: "compare",

	createTemplate: _.template($('#compare-template').text()),

	events:{
		
	},

	initialize: function(){
		var firstSearch = $('').val(); //need to put html tag
		var firstList = new ItemsCollection();
		firstList.url += ',' + firstSearch;

		var secondSearch = $('').val(); //need html tag
		var secondList = new ItemsCollection();
		sencondList.url += ','+ secondSearch;

		var readyCollections = 0;

		firstList.fetch().then(function(){readyCollections +=1});
		secondList.fetch().then(function(){readyCollections +=1});

		var readyCollectionsLoop = setInterval(function(){
			if(readyCollections === 2){
				renderComparison(); //what to do with this stuff???!??!?!?
				clearInterval(readyCollectionsLoop);
			}
		}, 50);

		//this.render();
	},

	render: function(){
		//this.$el.html(this.createTemplate()); how to do this?
	},

	renderComparison: function(){
		//want: 2 small divs for space,  2 lger spaces for focus view
	}

});