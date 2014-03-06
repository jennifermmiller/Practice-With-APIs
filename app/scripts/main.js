console.log('manbearpig');
//Pottery/ceramics -> way to filter out commercial looking coffee mugs?

//Goals: fetch on interval,
//		 sort by price both ways
//		 search -> maybe put search field in header????
//		 Hookup home view 
// 		 Improve changing background
//		 Be able to add ___ more to list-view

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	//fetchNewItems();

	$('.sort-by-price').on('click', function(){
		sortItems();
	});

	$('.add-items-to-list').on('click', function(){
		increaseItemList();	
	});

	$('.js-search-btn').on('click', function(){
		var keyword = $('.js-keyword-search').val();

		window.location.hash = 'search/' + keyword;

		$('.js-keyword-search').val('');
	});



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

//Improve this so it toggles?
function sortItems(){

	items.sort();

	$('.item-list-version').empty('');

	items.each(function(item){
		new ListView({model: item});
	});
}

function increaseItemList(){
	$('.item-list-version').empty('');

	var newLimit = 25 + parseFloat($('.js-additional').val());

	items.url = 'https://api.etsy.com/v2/listings/active.js?keywords=ceramic,pottery&limit='+ newLimit +'&api_key=42hmr9rr7q7wvj31sce3ofwt&includes=Images&callback=?',

	items.fetch();

	// items.each(function(item){
	// 	new ListView({model: item});
	// });

}

