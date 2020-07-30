import React from 'react';

class HeroDetails extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			hero = {
				name: '',
				id: null
			}
		}
	}
}

function Details({ hero }) {
	return (
		<div>
			<h1>Details</h1>
			<form>
				<p>{hero.name} details!</p>
				<p>id: {hero.id}</p>
				<lable htmlFor="heroName">
					name: <input value={hero.name} name="heroname"></input>
				</lable>
			</form>
		</div>
	);
}

export default Details;
