var express = require('express');
var router = express.Router();

var fs = require('fs');
var coffee = require('../modules/coffee');

router.get('/', function(req, res, next) {

/* 
	Getting the data object from readCoffee function and 
  	passing the object to the JADE template.
*/

	coffee.readCoffee(pushContent);

    function pushContent(obj){
    	res.render('list', {
        	title: 'Kaffesorter',
        	coffee: obj
    	});
  	}
});

module.exports = router;
