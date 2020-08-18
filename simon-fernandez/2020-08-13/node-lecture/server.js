const http = require('http');
const server = http.createServer((request, response) =>
	response.end(
		"<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>	<title>Document</title>	</head><body>		<h1>Bombasto presidente<h1><h2>Celeritas es un mierdas<h2></h2>	</body>	</html>"
	)
);
server.listen(2626, () => console.log('Server is running'));
