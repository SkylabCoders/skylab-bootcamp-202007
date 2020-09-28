function orderEventsFlow(array){
  const reducer = (a, c) => a.concat(c);
  const order = function (a, b) {
    let firstTime;
    let secondTime;
    (a.time === '' || a.time === undefined) ? firstTime = a.est_time : firstTime = a.time;
    (b.time === '' || b.time === undefined) ? secondTime = b.est_time : secondTime = b.time;
    firstTime = new Date(firstTime);
    secondTime = new Date(secondTime);
    return firstTime - secondTime; 
  }
  return array.reduce(reducer).sort(order);
}

module.exports = orderEventsFlow;