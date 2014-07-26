var Beer = require('../models/beer');
// console.log(Beer);
var beer_mock = {
  "id": 44,
  "abv": 4.8,
  "brewery": {
    "id": 6,
    "name": "Ale Asylum"
  },
  "category": "Porter",
  "description": "Dark in color yet soft on the palate. English chocolate malts give it a complex, rich flavor wrapped in a silky smooth finish.",
  "name": "Contorter Porter"
}

describe("Beers", function(){  
  // it("Create Beer", function(done){ 
  //   var beer = new Beer(beer_mock);  
  //   console.log(beer); 
  //   beer.save(function(doc){     
  //     console.log(doc); 
  //     // doc.name.should.equal(beer_mock.name);       
  //     done();    
  //   });  
  // });

  // it("Retrieve Beers", function(done){ 
  //   var query = {};
  //   Beer.find(query, function(doc){     
  //     // console.log(doc); 
  //     // doc.name.should.equal(beer_mock.name);       
  //     done();    
  //   });  
  // });

});
