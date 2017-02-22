Array.prototype.bubbleSort = function () {
  let sorted = false;
  while( sorted === false) {
    sorted = true;
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
        sorted = false;
      }
    }
  }
};

let bubbleSortArray = [5, 4, 3, 2, 1];
bubbleSortArray.bubbleSort();
console.log(bubbleSortArray);


String.prototype.substrings = function () {
  let subs = [];
  for(let i = 0;i < this.length;i++){
    for(let j = i + 1;j <= this.length;j++){
      subs.push(this.slice(i,j));
    }
  }
  return subs;
};

let subsArr = "hello";
console.log(subsArr.substrings());
