Array.prototype.myEach = function (cb) {

  for (let i = 0; i < this.length; i++){
    cb(this[i]);
  }
};

let myEachArray = [1,2,3];

// myEachArray.myEach((el) => { console.log(el * 2); });

Array.prototype.myMap = function (cb) {

  let map = [];

  this.myEach((el) => {
    map.push(cb(el));
  });

  return map;
};

let myMapArray = [1, 2, 3];
// console.log(myMapArray.myMap(el =>  el * 2));

Array.prototype.myInject = function (cb) {
  let accumulator = this[0];

  this.slice(1).myEach((el) => {
    accumulator = cb(accumulator, el);
  });

  return accumulator;
};

let myInjectArray = [1,2,3,4,5];
console.log(myInjectArray.myInject((acc, el) => acc * el));
