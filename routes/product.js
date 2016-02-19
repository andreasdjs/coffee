var express = require('express');
var router = express.Router();

var fs = require('fs');
var coffee = require('../modules/coffee');

router.get('/', function(req, res, next) {

	console.log("Query id: " + req.query.id);

	coffee.readCoffee(pushContent);

	function pushContent(obj){
		console.log("Query id from product page: " + req.query.id);

     	obj.coffee.forEach(function(element){

	      	if (parseInt(element.id) === parseInt(req.query.id)) {

				res.render('product', {
			        	id: element.id,
			        	title: element.title,
			        	roastery: element.roastery,
			        	producer: element.producer,	        	
			        	country: element.country,	        	
			        	brewingMethod: element.brewingMethod,	        	
			        	about: element.about
			    });
	      	}
      	});   
	}
});

module.exports = router;
