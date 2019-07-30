const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('stegosaurus', 'herbivour', 20);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park = new Park('Jurrasic Park', 10);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.checkMostPopular();
    assert.deepStrictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    let array = [dinosaur2];
    const actual = park.findSpecies('t-rex');
    assert.deepStrictEqual(actual, array);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.removeSpecies('t-rex');
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
  });

});
