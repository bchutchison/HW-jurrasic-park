const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indexOfDinosaur, 1);
};

Park.prototype.checkMostPopular = function () {
 const popular = Math.max.this.apply(Math, dinosaurCollection.guestsAttractedPerDay);
 return popular

  // const max = this.dinosaurCollection.guestsAttractedPerDay.reduce(function(prev, current){
  //   return(prev.y > current.y) ? prev : current
  // })
}

module.exports = Park;
