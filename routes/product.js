var express = require('express');
var router = express.Router();

var fs = require('fs');

function readCoffee(callback) {
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);
      callback(obj);

  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {

	console.log("Query id: " + req.query.id);

	readCoffee(pushContent);

	function pushContent(obj){
		console.log("Query id from product page: " + req.query.id);

      obj.coffee.forEach(function(element){

      	if (parseInt(element.id) === parseInt(req.query.id)) {
      		console.log("Hit!");

		res.render('product', {
	        	id: element.id,
	        	title: element.title,
	        	roastery: element.roastery,
	        	producer: element.producer,	        	
	        	country: element.country,	        	
	        	brewingMethod: element.brewingMethod,	        	
	        	about: element.about
	     });

        console.log("Id: " + element.id);
        console.log("Roastery: " + element.roastery);
        console.log("Title: " + element.title);
        console.log("Producer: " + element.producer);
        console.log("Brewing method: " + element.brewingMethod);
        console.log("About: " + element.about);
        console.log("\n"); 

      		console.log("Hit!");
			if (typeof element.id === 'string') {
				console.log("Type is string");
			}

      	}

        console.log("Id: " + element.id);
        console.log("Roastery: " + element.roastery);
        console.log("Title: " + element.title);
        console.log("Producer: " + element.producer);
        console.log("Brewing method: " + element.brewingMethod);
        console.log("About: " + element.about);
        console.log("\n"); 

      });   
	}

});

module.exports = router;
