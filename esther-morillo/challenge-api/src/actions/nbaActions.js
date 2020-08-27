import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadTeams() {
  fetch("https://api-nba-v1.p.rapidapi.com/teams/teamId/%7Bteamid%7D")
      .then(function(response) {
          return response.json();
      })
     }
