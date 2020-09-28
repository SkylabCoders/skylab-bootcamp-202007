const debug = require("debug")("app:groupHellper");

function checkArr(collectionArr, id) {
  let newArr = [];
  const check = collectionArr.some(
    (actualValue) => actualValue + "" === id + ""
  );

  if (check) {
    newArr = collectionArr.filter((value) => value + "" !== id + "");
  } else {
    newArr = [...collectionArr, id];
  }
  return newArr;
}

module.exports = { checkArr };
