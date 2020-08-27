import React from 'react'
import nbaStore from "../stores/nbaStore";

function NbaList(){ 
  const [nba, setNba] = useState(nbaStore.getTeams());
 

  return (
    <>
       {nba.map((nbaList) => (
        <NbaListItem/>
       )}
          
    </>
  );
}

export default NbaList;
