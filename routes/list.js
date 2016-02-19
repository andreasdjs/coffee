var express = require('express');
var router = express.Router();

var fs = require('fs');
var coffee = require('../modules/coffee');

router.get('/', function(req, res, next) {

	// Call coffe.readCoffee and get coffee object with pushContent
	coffee.readCoffee(pushContent);

    function pushContent(obj){
    	res.render('list', {
        	title: 'Kaffesorter',
        	coffee: obj
    	});
  	}
});

module.exports = router;
