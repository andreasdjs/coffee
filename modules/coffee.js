var fs = require('fs');

function readCoffee(callback) {
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);
      callback(obj); // Send object back
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

function initialWrite() {
  var fileReadStream = fs.createReadStream('coffee.json');
  var data = "";

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
 	fs.writeFile('coffeeWritten.txt', data, (err) => {
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

function getMaxId(callback) {
  var fileReadStream = fs.createReadStream('coffeeWritten.txt');
  var data = "";
  var maxId = 0;

  fileReadStream.on('data', (chunk) => {
    data += chunk;
  });

  fileReadStream.on('end', () => {
      var obj = JSON.parse(data);

      obj.coffee.forEach(function(element){
  		if (parseInt(element.id) >= maxId) {
  			maxId = parseInt(element.id) + 1;
  		}

      });
    	callback(maxId);
  });
}

module.exports.initialWrite = initialWrite;
module.exports.readCoffee = readCoffee;
module.exports.getItemById = getItemById;
module.exports.writeNewEntry = writeNewEntry;
module.exports.getMaxId = getMaxId;
