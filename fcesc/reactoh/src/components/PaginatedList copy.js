import React from 'react';
import './PaginatedList.css';

function PaginatedList(props){
  console.log(props);
  const data = props.data;
  let empty = [];
  for (let i=0; i<data.length; i++){
    empty.push(<li key={i} onClick={()=>{props.click(data[i].id)}}>{data[i].id}: {data[i].name}</li>);
  }
  let result = (         
    <div className="App">
      <h1>Heroes list</h1>
      <div className="list">
        <ul>{empty}</ul>
        <div className="pagination__component">
            <p>Displaying page {props.currentPage} of {props.numberOfPages}, listing {props.itemsPerPage} of {props.numberOfHeroes}</p>
            <button id='GoToPreviousPage' onClick={props.previousPage}>Previous Page</button> <button id='GoToNextPage' onClick={props.nextPage}>Next Page</button>
        </div>
      </div>
    </div>);
  return result;
}

export default PaginatedList;
