const aSync = function (time) {
  setTimeout(() => {
    console.log("Async Call");
  }, time);
};
const sync = function () {
  console.log("Sync Call");
};

aSync(100);
sync();
aSync(2500);
