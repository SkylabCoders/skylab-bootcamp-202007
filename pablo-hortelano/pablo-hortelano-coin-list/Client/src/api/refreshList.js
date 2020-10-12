export default function refreshList(props, coinActions) {
  fetch("http://localhost:3003/coins")
    .then((response) => response.json())
    .then((data) => {
      /* let data2 = data.filter((elem) => elem.name === "Bitcoin"); */
      props.dispatch(coinActions.getCoinMovements(data));
      /* ; */
    });
}
