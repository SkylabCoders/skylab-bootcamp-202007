import axios from "axios";

export function addCoins(cryptoNames, userID, setcryptoName) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3003/coins", {
        userID,
        coins: cryptoNames,
      })
      .then(
        (response) => {
          debugger;
          console.log(response.data);
          setcryptoName([]);
          dispatch({ type: "INCREMENT", newCoins: cryptoNames });
        },
        (error) => console.log(error)
      );
  };
}
