var Beer = require('../controllers/api/beers');
var should = require('should');

var query, req, res = {};
var beer_mock = {
  "_id": "53cf26599487857721451797",
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
  //   var cb = function(err, doc, res){
  //     doc.name.should.equal(beer_mock.name);        
  //     done();    
  //   };  
  //   var req = {};
  //   req.body = beer_mock;  
  //   Beer.create(req, res, cb);
  // });

  it("Retrieve Beers", function(done){ 
    var cb = function(err, doc, res){
      doc.should.be.an.instanceOf(Array);      
      done();    
    };  
    Beer.retrieve(req, res, cb); 
  });

  it("Retrieve One Beer by Name", function(done){ 
    var cb = function(err, doc, res){
      doc.name.should.equal(beer_mock.name);  
      done();    
    };  
    var req = {
      params: {
        name: beer_mock.name
      }
    };
    Beer.findOneByName(req, res, cb); 
  });

  it("Retrieve One Beer by ID", function(done){ 
    var cb = function(err, doc, res){
      doc.name.should.equal(beer_mock.name);  
      done();    
    };  
    var req = {
      params: {
        name: beer_mock.name
      }
    };
    Beer.findOneByName(req, res, cb); 
  });

  // it("Update Beer", function(done){ 
  //   var cb = function(err, doc, res){
  //     doc.should.be.an.instanceOf(Array);      
  //     done();    
  //   };  
  //   Beer.retrieve(req, res, cb); 
  // });
});
