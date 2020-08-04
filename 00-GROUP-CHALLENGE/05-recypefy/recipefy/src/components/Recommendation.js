import React from 'react';
import './Recommendation.css';
import { Link } from 'react-router-dom';

function Recomendation() {
	return (
		<section className="box">
			<h2 className="box__title">RECOMMENDATION FOR YOU</h2>
			<div className="recipe" id="recipeA">
				<div className="recipe__text">
					<h3 className="recipe__text--title">potato with tomato and chips</h3>
					<div className="recipe__text--preferences">
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/gluten-free-512.png"
						></img>
					</div>
				</div>
				<Link to="./RecipePage" className="link">
					<img
						className="recipe__image"
						src="https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg"
					></img>
				</Link>
			</div>
		</section>
	);
}
export default Recomendation;
