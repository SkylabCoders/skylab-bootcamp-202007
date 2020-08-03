import React from 'react';
import './recomendation.css';
function Recomendation() {
	return (
		<section className="box">
			<h1 className="box__title">RECOMMENDATION FOR YOU</h1>
			<img
				className="direction-markers__left"
				src="https://www.pinclipart.com/picdir/big/418-4187931_rounded-arrow-left-comments-clipart.png"
			></img>
			<img
				className="direction-markers__right"
				src="https://www.pinclipart.com/picdir/big/150-1507020_right-arrow-scroll-right-icon-png-clipart.png"
			></img>
			<div className="recipe" id="recipeA">
				<div className="recipe__text">
					<h3 className="recipe__text--title"></h3>
					<div className="recipe__text--preferences">
						<h4 className="preferences__title">PREFERENCES</h4>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
						<img className="preferences__icon" src=""></img>
					</div>
				</div>
				<button className="recipe__image"></button>
			</div>
		</section>
	);
}
export default Recomendation;
