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
      callback(obj); // Send object to pushContent
  });
}

router.get('/', function(req, res, next) {

	// Call readCoffee and get coffee object with pushContent
	readCoffee(pushContent);

    function pushContent(obj){
    	res.render('list', {
        	title: 'Kaffesorter',
        	coffee: obj
    	});
  	}
});

module.exports = router;
