var express = require('express');
var router = express.Router();

var fs = require('fs');

function getItemById(id, callback) {
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);

      console.log("\nRead JSON file: \n");

      obj.coffee.forEach(function(element){
      	if (parseInt(element.id) === id) {
        console.log("Id: " + element.id);
        console.log("Roastery: " + element.roastery);
        console.log("Title: " + element.title);
        console.log("Producer: " + element.producer);
        console.log("Brewing method: " + element.brewingMethod);
        console.log("About: " + element.about);
        console.log("\n"); }
      });    
  });

  callback(obj);

}



/* GET users listing. */
router.get('/', function(req, res, next) {

	console.log("Query id: " + req.query.id);

	getItemById(parseInt(req.query.id), pushContent);

	function pushContent(obj){
		res.render('product', {
	        	title: 'KAFFESORT'
//	        	coffee: obj
	     });
	}

});

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
