import React from 'react';

const heroArray = (heroList) => (
	<ul>
		{heroList.map(function (item) {
			return <li key={heroList[item].id}>{heroList[item].name}</li>;
		})}
	</ul>
);

function Navigation(props) {
	return (
		<div>
			<h1>Tour of Heroes powered by React</h1>
			<h2></h2>
			<div>
				<a href="">
					<button
						onClick={(event) => {
							props.changeViewToList();
						}}
					>
						Hero List
					</button>
				</a>
				<a href="">
					<button>Dashboard</button>
				</a>
				<a href="">
					<button>Details</button>
				</a>
			</div>
		</div>
	);
}

export default Navigation;
