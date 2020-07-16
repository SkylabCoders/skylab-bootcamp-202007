const myPrivateLog = (value) => {
  console.log("The new value is: ", value);
};

const increment = (value) => {
  myPrivateLog(value + 1);
};

const decrement = function (value) {
  myPrivateLog(value - 1);
};

function fnUpAndDown(value, callback) {
  callback(value);
}

fnUpAndDown(2, increment);
fnUpAndDown(8, decrement);
