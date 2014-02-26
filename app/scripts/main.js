console.log('manbearpig');
//need to link to esty api (also decide which products i want to display)
	//Pottery/ceramics -> way to filter out commercial looking coffee mugs?
//need to create a sort function (by price or color or whatever)
//need to fetch on an interval


 $(document).ready(function(){

	router = new MainRouter();

	$.ajax({

		dataType: 'jsonp',

		url: "https://openapi.etsy.com/v2/listings/active.js?keywords=ceramics,pottery&callback=etsyResults&fields=title,price,description,listing_id,url&limit=50&includes=Images:1&api_key=42hmr9rr7q7wvj31sce3ofwt",


		success: function (resultsFromPageLoad) {
		    etsyItems = new ItemsCollection(resultsFromPageLoad.results);
		    
		    etsyItems.each( function(item) {
		      	new ListView({model:item});
		    });

		    Backbone.history.start();
		},

		error: function (msg) {
		    console.log('Page load error');
		},

	});

	
});

// getNewListings: function(){
// 	setInterval(function(){
// 		etsyItems.fetch({
// 			success: function(){
// 				console.log("Woot! Getting new items now!")
// 			},
// 			error: function(){
// 				console.log("Oops! Can't process request.")
// 			}
// 		});
// 	}, 4000) //120000 for 2min
// }	

	

//Attempt at sorting function
//function sortList(){
//	var listItems = JSON.stringify(etsyItems);
	//etsyItems = _.indexBy('listItems','price');
	//new ListView({model: this.model});	
//};	
