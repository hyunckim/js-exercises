// Array.prototype.uniq = () => {
//   return this.filter(unique);
// };
//
// function unique(num, idx, arr){
//   let count = 0;
//   arr.forEach( (el) => {
//     if(el === num){
//       count += 1;
//     }
//   });
// }

Array.prototype.uniq = function(){
  let unique = [];
  this.forEach( (el) => {
    if ( !unique.includes(el)){
      unique.push(el);
    }
  });
  return unique;
};

let uniqueArray = [1, 2, 1, 3, 3];
console.log(uniqueArray.uniq());

Array.prototype.twoSum = function(){
  let sumArray = [];
  for(let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        sumArray.push([i, j]);
      }
    }
  }
  return sumArray;
};

let twoSumArray = [-1, 0, 2, -2, 1];
console.log(twoSumArray.twoSum());

Array.prototype.myTranspose = function(){
  let transpose = [];

  for(let i = 0; i < this.length; i++){
    let row = this[i];
    let sub = [];
    for(let j = 0; j < row.length; j++){
      sub.push(this[j][i]);
    }
    transpose.push(sub);
  }
  return transpose;
};

let transposeArr = [[0,1,2],[3,4,5],[6,7,8]];
console.log(transposeArr.myTranspose());
