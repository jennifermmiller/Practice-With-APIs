//Things for the future:
//	Pottery/ceramics -> way to filter out commercial looking coffee mugs?
//	Sort by price both ways
//	Refactor so there's a main-view and not main.js
// 	Improve changing background -> defualt background for items w/o hex value

console.log('manbearpig');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	$('.sort-by-price').on('click', function(){
		sortItems();
	});

	$('.add-items-to-list').on('click', function(){
		increaseItemList();	
	});

	$('.js-search-btn').on('click', function(){
		var searchWord = $('.js-keyword-search').val();

		window.location.hash = 'search/' + searchWord;

		$('.js-keyword-search').val('');
	});
});

//Helper functions that need a home:

//Improve this so it toggles  b/t low to high and hight to low?
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
}

