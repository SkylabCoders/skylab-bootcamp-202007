const operation = { increment: "increment", decrement: "decrement" };

function fnUpAndDown(currentOperation) {
  let responseFunction = null;

  const myPrivateLog = (value) => {
    console.log("The new value is: ", value);
  };

  const increment = (value) => {
    myPrivateLog(value + 1);
  };

  const decrement = function (value) {
    myPrivateLog(value - 1);
  };

  switch (currentOperation) {
    case operation.increment:
      responseFunction = increment;
      break;
    case operation.decrement:
      responseFunction = decrement;
      break;
    default:
      myPrivateLog("Unknown operation");
      break;
  }

  return responseFunction;
}

const myOperation = fnUpAndDown(operation.pollo);
if (typeof myOperation === "function") {
  myOperation(1);
}