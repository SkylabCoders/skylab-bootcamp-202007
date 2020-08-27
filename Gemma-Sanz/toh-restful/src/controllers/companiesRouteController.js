/* const get = (req, res) => {
	const query = {};
	if (req.query.id) {
		query.id = req.query.id;
	}
	Company.find(query, (error, companies) => {
		if (error) {
			res.send(error);
		}
		res.json(companies);
	});
};

const post = (req, res) => {
	const company = new Company(req.body);
	company.save();
	res.status(201).json(company);
};

module.exports = { get, post };
 */
