var fs = require('fs');

function readCurrentJson () {
	// Remove read from functions below and put it here.
}

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

function writeNewEntry(newEntryObject) {
  var fileReadStream = fs.createReadStream('coffee.json');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);
  
	fs.writeFile('writtenCoffeeObject.txt', JSON.stringify(newEntryObject), (err) => {
	  if (err) throw err;
	  console.log('Input object saved!');
	}); 

	fs.writeFile('writtenCoffeeFull.txt', JSON.stringify(obj), (err) => {
	  if (err) throw err;
	  console.log('Full object saved!');
	}); 

	obj.coffee.unshift(newEntryObject);
	var write = JSON.stringify(obj);

	fs.writeFile('writtenCoffeeUnshifted.txt', write, (err) => {
	  if (err) throw err;
	  console.log('Input object added to full object and saved!');
	}); 

  });
}

function getMaxId() {
  var fileReadStream = fs.createReadStream('coffee.json');
  var data = "";
  var maxId = 0;

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);

      console.log("\nRetrieving max Id.\n");

      obj.coffee.forEach(function(element){
//		console.log(element.id);		
  		if (parseInt(element.id) >= maxId) {
  			maxId = parseInt(element.id) + 1;
  		}

      });
      console.log("New id: " + maxId + "\n");    
  });
}

module.exports.readCoffee = readCoffee;
module.exports.getItemById = getItemById;
module.exports.writeNewEntry = writeNewEntry;
module.exports.getMaxId = getMaxId;
