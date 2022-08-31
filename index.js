var fs = require('fs');

// json file with the data
var data = fs.readFileSync('poke2.json');

var poke = JSON.parse(data);
const express = require("express");
const app = express();
  
// To solve the cors issue
const cors=require('cors');
   
app.listen(process.env.PORT, 
    () => console.log("Server Start at the Port"));
   
app.use(express.static('public'));
app.use(cors());

// when get request is made, alldata() is called
app.get('/poke', alldata);
  
function alldata(request, response) {
      
    // Returns all information about the elements
    response.send(poke);
}

