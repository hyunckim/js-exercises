function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

let c = new Cat("Jesse", "J");
let h = new Cat("Hyun", "H");

console.log(c.cuteStatement());
console.log(h.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

console.log(c.cuteStatement());
console.log(h.cuteStatement());


Cat.prototype.meow = function () {
  console.log("meow");
};

c.meow();
h.meow();

c.meow = function () {
  console.log("bark");
};

c.meow();
h.meow();
