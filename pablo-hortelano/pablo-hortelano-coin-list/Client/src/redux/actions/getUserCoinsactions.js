import axios from "axios";

export function getCoins(userID) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3003/coins/user", {
        userID,
      })
      .then(
        (response) => {
          debugger;
          console.log(response.data);
          dispatch({ type: "USERMOVEMENTS", userMovements: response.data });
        },
        (error) => console.log(error)
      );
  };
}
