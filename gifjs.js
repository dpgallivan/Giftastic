$(document).ready(function() {

var topics = ["Batman", "Superman", "Wonderwoman", "Aquaman", "Cyborg", "Green Lantern", "Flash", "Green Arrow", "Robin", "Captain America", "Iron Man", "Hulk", "Thor", "Hawkeye", "Dr.Strange", "Falcon", "SpidermanpersonVision", "Black Panther"];
		console.log(topics);
	// My clicks are not working at all...and my console log isnt logging anything either
	$("button").on("click", function() {
		var hero = $("this").data("search");  // `this` should not be a string
		console.log(x); // not seeing where you declared `x` in your code above
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +hero+ "&api_key=dc6zaTOxFJmzC&limit=10";
		console.log(queryURL)

		$.ajax({
			url:queryURL,
			method:"GET"
		})
		.done(function(response){
			console.log(response);
			var results = response.data

			for (var i = 0; i < results.length; i++) {
				var heroDIV = $("<div>");
				var p = $("<p>");
				p.text(results[i].rating);
				var heroImg = $("<img>");
				heroImg.addClass("anotherImg")
				heroImg.attr('src', results[i].images.fixed_height.url);
				// I think this is the last part of the click function??
				heroDiv.append(heroImg)
				heroDiv.prepend("#heroes-view");
			}
		// Your code above to this point looks good
		$(".anotherImg").on("click", function() {
		// Im still confused on what 'data' does
		// `data` is just another html attribute, but with special properties that allow you to store data on the DOM element itself. This is a bit advanced tho, so just thing of it as another html attribute for now. 
			var state = $(this).attr("data-state");
			if (state === 'still') {
				// Im not sure if this is right; got from StackOverflow
				$(this).attr('src', response.giphy_url); // in your `response` object from giphy, there img urls that you would want to place here. Not `$(this).data('animate')`
				$(this).attr('data-state', 'animate');
			} else {
				$(this).attr('src',$(this).data('still')); // same goes fore here
				$(this).attr('data-state', 'still');
			}
		});
	});

	var animals = []; // no contents on initializaiton

    $('#addHero').on('click', function(){
    	var heroButton = $("#hero-input").val();
		var newButton = $("<button>").addClass( "btn btn-info hero").attr('data-search',heroButton).html(heroButton)
        $("#heroesbuttons").append(newButton);
        	console.log("hello?");
// are we suppose to put this again???
// No, this next ajax call is unecessary. Come see me about DOM events vs. regular program flow
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + heroButton + "&api_key=dc6zaTOxFJmzC&limit=10";
        	console.log(animalButton);

        $.ajax({
        url: queryURL,
        method: 'GET'
        })
		.done(function(response) {
			var results = response.data;

            for (var i = 0; i < results.length; i++) {
				var heroDiv = $('<div>');
                var p =$('<p/>');
                p.text(results[i].rating);
                var heroImage = $('<img/>');
                heroImage.addClass('anImg')
                heroImage.attr('src', results[i].images.fixed_height_still.url);
                heroImage.attr('data-still', results[i].images.fixed_height_still.url)
                heroImage.attr('data-animate', results[i].images.fixed_height.url)
                .attr('data-state', 'still');
                heroDiv.append(p);
                heroDiv.append(heroImage);
                heroDiv.prependTo($("#heroes-view"));
            }

            $('.anotherImg').on('click', function() {
                var state = $(this).attr('data-search'); 
                    console.log(this)
                if (state == 'still') {
              	  $(this).attr('src', $(this).data('animate'));
              	  $(this).attr('data-search', 'animate')
                } else {     
              	  $(this).attr('src', $(this).data('still'));
              	  $(this).attr('data-search', 'still');
                }      
            });
        });
});

		// var hero = $(this).attr("data-person");
// ===============================================================
// the bottom display shows the different methods i tried in order to get this thing working; I am also way over two hours on this hw
// ==========================================================
	//

	// 		for (var i = 0; i < topics.length; i++) {
	// 			var gifDiv = $("<div class = 'item'>");
	// 			var heroImg = $("<img>");
	// 			heroImg.attr("src", topics[i].images.fixed_height.url);
	// 			gifDiv.append(heroImg)
	// 		}
	// 	})
	// })

	// function displayTopicsInfo() {
	// 	var heroes = $(this).attr("data-name");
	// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "&api_key=dc6zaTOxFJmzC&limit=10";

	// 	$.ajax({
	// 		url:queryURL
	// 		method: "GET"
	// 	}).done(function(response) {

	// 		// var heroDiv = $("<div class = 'hero'>");
	// 		// var imgURL = response.Poster;
	// 		// var heroImg = $("<img>").attr("src", imgURL)
	// 		// heroDiv.append(image)
	// 		// $("#heroes-view").prepend(heroDiv)
	// 	});
	// }
