console.log('manbearpig');
//need to link to esty api (also decide which products i want to display)
	//Pottery/ceramics -> way to filter out commercial looking coffee mugs?

//Goals: fetch on interval,
//		 sort by price
//		 search

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	fetchNewItems();

	$('.sort-by-price').click(function(){
		sortItems();
	});
	
	$('.search-items').click(function(){
		$('.search-results').html(_.template($('.search-template').text()));
	})
});


//Does this work? Success console.log prints but cant seem to pay attention long enough to notice if new things are actually loading
function fetchNewItems(){
	setInterval(function(){
		items.fetch({
			success: function(){
				console.log('Sweet! Fetching new items for you.');
			},
			error: function(){
				console.log('Unfortuntely cannot fetch new messages at this time.');
			}
		});
	}, 120000);
}

//Somehow need to run price through parseFloat b4 sorting, make a comparator function inside collection?
//Improve this so it toggles?
function sortItems(){
	
	items.comparator = ('price');

	items.sort();

	$('.list-of-items').empty('');

	items.each(function(item){
		new ListView({model: item});
	});
}


