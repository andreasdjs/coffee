var express = require('express');
var router = express.Router();

/* Copy paste from coffee.js */

var fs = require('fs');

/*
fs.stat('coffeeWritten.txt', function(err, stat) {
    if(err == null) {
        console.log('File exists');
    } else if(err.code == 'ENOENT') {
        console.log('File does not exist');    	
    } else {
        console.log('Some other error: ', err.code);
    }
});
*/
/*
function checkForDataFile(callback) {
	fs.stat('coffeeWritten.txt', function(err, stat) {
	    if(err == null) {
	        console.log('File exists');
	    } else if(err.code == 'ENOENT') {
	        console.log('File does not exist');    	
	    } else {
	        console.log('Some other error: ', err.code);
	    }
	});
}
*/

function readCoffee(callback) {
 //
 /* 
	fs.stat('coffeeWritten.txt', function(err, stat) {
	    if(err == null) {
	        console.log('using coffeWritten.txt');
			var fileReadStream = fs.createReadStream('coffeeWritten.txt');
	    } else if(err.code == 'ENOENT') {
	        console.log('Using coffee.json');
			var fileReadStream = fs.createReadStream('coffee.json');
	    } else {
	        console.log('Some other error: ', err.code);
	    }
	});
*/
//
//  var fileReadStream = fs.createReadStream('coffee.json');
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);

      console.log("\nRead JSON file: \n");

      obj.coffee.forEach(function(element){
        console.log("Id: " + element.id);
        console.log("Roastery: " + element.roastery);
        console.log("Title: " + element.title);
        console.log("Producer: " + element.producer);
        console.log("Brewing method: " + element.brewingMethod);
        console.log("About: " + element.about);
        console.log("\n"); 
      });    

      callback(obj);

  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {

   // Add function that loads JSON here.
   // functionName(callback);
   
// "title": "Chorongi",
// "roastery" : "Slöinge",

   // Function to render to jade-page. Passes a JSON-object as a parameter.

	readCoffee(pushContent);

    function pushContent(obj){
    	res.render('list', {
        	title: 'KAFFESORTER',
        	coffee: obj
      });
   }

/* http://jade-lang.com/reference/iteration/ */

/*
      res.render('list', {
         title: 'KAFFESORTER',
         content: 'content'
      });
*/

//   res.render('list');

});

module.exports = router;
