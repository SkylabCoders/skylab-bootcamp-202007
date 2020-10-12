function itemMethods(){
	function readOne (req, res) { 
		const { data } = req;
		res.status(200);
		res.json(data); 
	}
	
	return  { readOne }
}

module.exports = itemMethods;