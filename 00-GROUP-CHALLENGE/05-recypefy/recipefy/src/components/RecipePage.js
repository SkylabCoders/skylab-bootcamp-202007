import React from 'react';
import receteListMoked from '../Recipe.mok.js';
import './RecipePage.css';

function RecipePage() {
	return (
		<div className="desktop__display">
			<div className="desktop__display--right">		
				<section className="flex__row info__container">
					<div className="flex__column data__container">
						<div className="data__circle time__background">40min.</div>
						<div className="data__circle calories__background">3000 kcal.</div>
						<div className="data__circle yield__background">4 portions</div>
					</div>
					<div className="title__img__container flex__column">
						<h2>{receteListMoked[0].title}</h2>
						<img src="https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-lg.jpg" />
					</div>
				</section>
			</div>
			<div className="desktop__display--left">
				<section>
					<div className="flex__row buttons__container">
						<div className="flex__column">
							<h2 className="desktop__recipe__title">{receteListMoked[0].title}</h2>
							<div className="underphoto__button flex__row rate__recipe">
								<p className="rate__elem">RATE:</p>
								<p className="rate__elem">{receteListMoked[0].puntuation}</p>
								<button>+</button>
								<button>-</button>
							</div>
							<div className="underphoto__button preference__box">
							<div className="recipe__text--preferences">
						<img
							className="preferences__icon preference__balanced"
							src="https://image.flaticon.com/icons/png/512/30/30636.png"
						></img>
						<img
							className="preferences__icon"
							src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
						></img>
						<img
							className="preferences__icon"
							src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
						></img>
						<img
							className="preferences__icon"
							src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
						></img>
						<img
							className="preferences__icon"
							src="https://www.footys.co.za/images/icon-sugar.png"
						></img>
						<img
							className="preferences__icon preference__peanut-free"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__tree-nut-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__alcohol-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
						></img>
					</div>
							</div>
						</div>
						<a className="underphoto__button">LETS COOCK IT</a>
					</div>
				</section>
				<section className="flex__column ingredients__container">
					<p>INGREDIENTS</p>
				</section>
			</div>
		</div>
	);
}

export default RecipePage;
