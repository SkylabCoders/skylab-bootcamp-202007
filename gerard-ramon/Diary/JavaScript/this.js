function Bowl() {}

Bowl.prototype.length = 0;

Bowl.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const myBowl = new Bowl();

myBowl.length++;
myBowl[0]=1;
myBowl.length++;
myBowl[1]=1;
myBowl.length++;
myBowl[2]=1;


myBowl.forEach(function (elem) {
  console.log(elem * 2);
});
