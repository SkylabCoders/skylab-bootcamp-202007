import React, { useState } from 'react';

function List() {
	const [answer, setAnswer] = useState([]);
	const fetchApi = async () => {
		const ApiCall = await fetch(
			'https://www.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=JLBr5npPhV',
			{
				method: 'GET'
			}
		);
		const games = await ApiCall.json();
		console.log(games);
		return games;
	};

	setAnswer(fetchApi());
	console.log(answer);
	return (
		<>
			<ul>
				{answer.map((element) => (
					<li key={element.key}>{element.name}</li>
				))}
			</ul>
		</>
	);
}
export default List;
