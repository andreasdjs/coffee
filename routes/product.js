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
//	getItemById(parseInt(req.query.id), pushContent);

	function pushContent(obj){
		console.log("Query id from product page: " + req.query.id);
//		console.log(obj.coffee[parseInt(req.query.id)].title);
//		console.log("after");

/*
      obj.coffee.forEach(function(element){
      	if (parseInt(element.id) === req.query.id) {
        console.log("Id: " + element.id);
        console.log("Roastery: " + element.roastery);
        console.log("Title: " + element.title);
        console.log("Producer: " + element.producer);
        console.log("Brewing method: " + element.brewingMethod);
        console.log("About: " + element.about);
        console.log("\n"); }
      });    

*/


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

/*
		res.render('product', {
	        	id: req.query.id,
	        	title: obj.coffee[parseInt(req.query.id)].title,
	        	roastery: obj.coffee[parseInt(req.query.id)].roastery,
	        	producer: obj.coffee[parseInt(req.query.id)].producer,	        	
	        	country: obj.coffee[parseInt(req.query.id)].country,	        	
	        	brewingMethod: obj.coffee[parseInt(req.query.id)].brewingMethod,	        	
	        	about: obj.coffee[parseInt(req.query.id)].about,
	        	coffee: obj
	     });


		*/
	}

});
/* 
"id": "3",
	        "title": "Yandaro",
	        "roastery" : "Slöinge",
	        "country": "Burundi",
	        "producer": "Yandaro",
	        "brewingMethod": "Press",
	        "about": "I norra delen av Burundi på gränsen till Rwanda, i regionen Kayanza,

*/
/*

	readCoffee(pushContent);

    function pushContent(obj){
    	res.render('list', {
        	title: 'KAFFESORTER',
        	coffee: obj
      });
   }
   */

module.exports = router;
