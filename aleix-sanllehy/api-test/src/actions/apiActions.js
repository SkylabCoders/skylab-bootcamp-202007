export default function apiSearch() {
	let requestOptions = { method: 'GET', cache: 'default' };

	fetch(
		'https://api.boardgameatlas.com/api/search?name=Catan&client_id=JLBr5npPhV',
		requestOptions
	)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
		});
}
