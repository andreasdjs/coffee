var fs = require('fs');

function readCoffee () {
  var fileReadStream = fs.createReadStream('coffee.json');
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
  });
}

function getItemById(id) {
  var fileReadStream = fs.createReadStream('coffee.json');
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
}

function writeNewEntry() {
  var fileReadStream = fs.createReadStream('coffee.json');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);

//      console.log("\nRead JSON file: \n");
/*
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
     */ 

	fs.writeFile('newtextfile.txt', 'Hello Node!', (err) => {
	  if (err) throw err;
	  console.log('It\'s saved!');
	}); 

  });

}


module.exports.readCoffee = readCoffee;
module.exports.getItemById = getItemById;
module.exports.writeNewEntry = writeNewEntry;

