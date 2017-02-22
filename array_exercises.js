Array.prototype.uniq = () => {
  return this.filter(unique);
};

function unique(num, idx, arr){
  let count = 0;
  arr.forEach( (el) => {
    if(el === num){
      count += 1;
    }
  });
}
