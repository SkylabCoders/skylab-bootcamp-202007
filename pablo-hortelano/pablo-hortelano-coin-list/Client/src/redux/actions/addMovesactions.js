import axios from "axios";

export function addMoves(selectedCrypto, newMovement, userID) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3003/movements", {
        selectedCrypto,
        userID,
        moves: newMovement,
      })
      .then(
        (response) => {
          debugger;
          console.log(response.data);
          dispatch({ type: "INCREMENTMOVE", moves: newMovement });
        },
        (error) => console.log(error)
      );
  };
}
