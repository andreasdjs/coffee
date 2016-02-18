var fs = require('fs');

function readCurrentJson () {
	// Remove read from functions below and put it here.
}
/*
function checkForDataFile() {
	
}*/

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

// Generating a clean JSON data file at startup.

function initialWrite(newEntryObject) {
  var fileReadStream = fs.createReadStream('coffee.json');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
  	// Converting from string to object
  	var obj = JSON.parse(data);

	// Pushing new object to last position in product array
	obj.coffee.push(newEntryObject);

	// Converting to text
	var write = JSON.stringify(obj);

	// Writing to disk
	fs.writeFile('coffeeWritten.txt', write, (err) => {
	  if (err) throw err;
	  console.log('New fresh JSON coffe data file written including new object.');
	}); 
  });
}


function writeNewEntry(newEntryObject) {
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {

  	// Converting from string to object
  	var obj = JSON.parse(data);
/*  
	fs.writeFile('writtenCoffeeObject.txt', JSON.stringify(newEntryObject), (err) => {
	  if (err) throw err;
	  console.log('Input object saved!');
	}); 
*/
/*
	fs.writeFile('writtenCoffeeFull.txt', JSON.stringify(obj), (err) => {
	  if (err) throw err;
	  console.log('Full object saved!');
	}); 
*/

	// Pushing new object to last position in product array
	obj.coffee.push(newEntryObject);

	// Converting to text
	var write = JSON.stringify(obj);

	// Writing to disk
	fs.writeFile('coffeeWritten.txt', write, (err) => {
	  if (err) throw err;
	  console.log('New coffe data file written including new object!');
	}); 

  });
}

function getMaxId(foo) {
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
  		if (parseInt(element.id) >= maxId) {
  			maxId = parseInt(element.id) + 1;
  		}

      });
      console.log("New id: " + maxId + "\n"); 
		foo(maxId);
  });
}

module.exports.initialWrite = initialWrite;
module.exports.readCoffee = readCoffee;
module.exports.getItemById = getItemById;
module.exports.writeNewEntry = writeNewEntry;
module.exports.getMaxId = getMaxId;
