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


Park.prototype.findSpecies = function (species) {

    let array = []
    for(var i = 0; i < this.dinosaurCollection.length; i++){
      if (this.dinosaurCollection[i].species === species){
      array.push(this.dinosaurCollection[i]);
      }
    }
    return array;
};


Park.prototype.removeSpecies = function (species) {
  for(var i = 0; i < this.dinosaurCollection.length; i++){
    if (this.dinosaurCollection[i].species === species){
    this.removeDinosaur(i);
    }
  }
};



module.exports = Park;




// Park.prototype.checkMostPopular = function () {
//   this.dinosaurCollection.forEach(function (item) {
//     console.log(item);
//   });
// };


// var currentMax = first item in array
// for each dinosaur in array create popular
// if popularity is higher than current reset Max dinosaur


// const array = ["one", "two", "three"]
// array.forEach(function (item, index) {
//   console.log(item, index);
// });


// var arr = this.dinosaurCollection.guestsAttractedPerDay;
// var largest = arr.reduce(function(x,y){
//   return (x > y) ? x : y;
// })

 // var popular = Math.max.apply(Math, this.dinosaurCollection.guestsAttractedPerDay);

  // const max = this.dinosaurCollection.guestsAttractedPerDay.reduce(function(prev, current){
  //   return(prev.this.dinosaurCollection.guestsAttractedPerDay > current.this.dinosaurCollection.guestsAttractedPerDay) ? prev : current
  // })
