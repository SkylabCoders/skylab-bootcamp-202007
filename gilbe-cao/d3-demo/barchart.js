let myData = [4, 8, 15, 16, 23, 42];
const body = d3.select('div#barchart');

function draw() {
	// data join
	const elementSelection = body.selectAll('p').data(myData);

	// update
	elementSelection.attr('width', (d) => d.prop.prop.prop);

	// create
	elementSelection
		.enter()
		.append('p')
		.text((d) => d);

	// delete
	elementSelection.exit().remove();
}

setInterval(() => {
	myData = [Math.random()];
	draw();
}, 300);
