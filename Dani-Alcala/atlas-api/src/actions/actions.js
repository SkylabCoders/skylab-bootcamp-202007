import actionTypes from "./actionTypes"
import dispatcher from "../dispatcher"

export function loadCards() {
    return fetch("https://api-nba-v1.p.rapidapi.com/teams/teamId/%7Bteamid%7D", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "1bd6106236msh4fd528ed943fb1fp1c6edejsnec6214a63849"
	}
})
.then((cards) => {
    dispatcher.dispatch({
      type: actionTypes.LOAD_CARDS,
      data: cards,
    });
})
.catch(err => {
	console.log(err);
});
}