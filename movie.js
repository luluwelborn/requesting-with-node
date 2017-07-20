//Require api & id Keys
var keyCode = require('./env.js');

//Require the request library
var request = require('request');



function get(movieTitle)	{
	// use API with the movieTitle as an argument
	var apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + keyCode.apiKey + "&cx=" + keyCode.idKey + "&q=" + movieTitle;
	console.log(apiUrl);

	request(apiUrl, function(err, res, body) {  
		//need to parse array threeFavoriteMovies
		var object = JSON.parse(body);
		console.log(object.items[9].title);
		console.log("--------------------------------------------------------------------------------");

});

}



// exports get function to other file
module.exports = get;







