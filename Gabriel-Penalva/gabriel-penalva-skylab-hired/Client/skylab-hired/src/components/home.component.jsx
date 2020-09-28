import React from 'react';
import '../styles/home.style.scss';

import ICONS from '../icons/icons';
const STR = {
	SENIOR: 'senior',
	JUNIOR: 'junior',
	FRONT: 'frontend',
	BACK: 'backend',
	FULL: 'fullstack',
	TECH: 'tech',
	QUEST: 'quest'
};
function Home() {
	return (
		<div className="holder">
			<form className="home-holder flex-col" action="/list" method="get">
				<span>Selecciona una categoria:</span>
				<div className="flex-row home-category-holder">
					<div className="flex-col home-category">
						<input
							type="radio"
							name="category"
							value={STR.SENIOR}
							id="senior"
						/>

						<label htmlFor="senior">
							<img src={ICONS.senior} alt="senior" title="senior" />
						</label>
						<span>SENIOR</span>
					</div>
					<input type="radio" name="category" value={STR.JUNIOR} id="junior" />
					<label className="flex-col home-category" htmlFor="junior">
						<img src={ICONS.junior} alt="junior" title="junior" />
						<span>JUNIOR</span>
					</label>
				</div>
				<div className="flex-col home-spec_holder">
					<span>Selecciona una especialitat:</span>
					<input type="radio" name="spec" value={STR.FRONT} id="frontend" />
					<label className="flex-col" htmlFor="frontend">
						<div className="home-spec">
							<p>FRONTEND</p>
						</div>
					</label>

					<input type="radio" name="spec" value={STR.BACK} id="backend" />
					<label className="flex-col" htmlFor="backend">
						<div className="home-spec">
							<p>BACKEND</p>
						</div>
					</label>

					<input type="radio" name="spec" value={STR.FULL} id="fullstack" />
					<label className="flex-col" htmlFor="fullstack">
						<div className="home-spec">
							<p>FULLSTACK</p>
						</div>
					</label>
				</div>
				<button type="submit" className="home-button">
					GO!
				</button>
			</form>
		</div>
	);
}

export default Home;
