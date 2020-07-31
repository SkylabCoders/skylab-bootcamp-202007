import React from 'react';

import '../Assets/list.css';

function List({ heroList }) {
	return <ul className="containerList">{heroList}</ul>;
}

export default List;
