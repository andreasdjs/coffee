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
		res.render('product', {
//	        	title: 'KAFFESORT',
	        	id: req.query.id,
	        	title: obj.coffee[parseInt(req.query.id)].title,
	        	roastery: obj.coffee[parseInt(req.query.id)].roastery,
	        	producer: obj.coffee[parseInt(req.query.id)].producer,	        	
	        	country: obj.coffee[parseInt(req.query.id)].country,	        	
	        	brewingMethod: obj.coffee[parseInt(req.query.id)].brewingMethod,	        	
	        	about: obj.coffee[parseInt(req.query.id)].about,
	        	coffee: obj
	     });
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
