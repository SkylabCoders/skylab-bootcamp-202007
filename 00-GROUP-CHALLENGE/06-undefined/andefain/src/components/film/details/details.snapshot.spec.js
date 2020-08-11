import renderer from 'react-test-renderer';
import React from 'react';
import FilmDetails from './details';
//import { BrowserRouter as Router } from 'react-router-dom';

describe('Film details snapshot', () => {
	const props = {
		id: 'tt1375666',
		title: 'Inception',
		stars: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe',
		year: '2010',
		runtimeStr: '2h 28mins',
		genres: 'Action, Adventure, Sci-Fi, Thriller',
		plot:
			"Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
	};

	const detailsTree = renderer.create(<FilmDetails details={props} />);
	it('Should match', () => {
		expect(detailsTree.toJSON()).toMatchSnapshot();
	});
});
