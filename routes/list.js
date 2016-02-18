var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   // Add function that loads JSON here.
   // functionName(callback);
   
// "title": "Chorongi",
// "roastery" : "Slöinge",

   // Function to render to jade-page. Passes a JSON-object as a parameter.
/*
   function pushContent(obj){
      res.render('list', {
         title: 'KAFFESORTER',
         coffee: obj
      });
   }
*/
      res.render('list', {
         title: 'KAFFESORTER',
         content: 'content'
//         coffee: obj
      });


//   res.render('list');

});

module.exports = router;
