import React from 'react';
import receteListMoked from '../Recipe.mok.js';
import './RecipePage.css';

function RecipePage() {
	return (
		<>
			<section className="flex__row info__container">
				<div className="flex__column data__container">
					<div className="data__circle">TIME</div>
					<div className="data__circle">CALORIES</div>
					<div className="data__circle">YIELD</div>
				</div>
				<div className="title__img__container flex__column">
					<h2>{receteListMoked[0].title}</h2>
					<img src="https://static.guiainfantil.com/media/9611/c/como-decorar-la-comida-de-los-ninos-lg.jpg" />
				</div>
			</section>
			<section>
				<div className="flex__row buttons__container">
					<div className="flex__column">
						<div className="underphoto__button flex__row">
							<p className="rate__elem">RATE:</p>
							<p className="rate__elem">{receteListMoked[0].puntuation}</p>
							<button>+</button>
							<button>-</button>
						</div>
						<div className="underphoto__button">
							<p>PREFERENCES</p>
						</div>
					</div>
					<a className="underphoto__button">DO IT</a>
				</div>
			</section>
			<section className="flex__column ingredients__container">
				<p>INGREDIENTS</p>
			</section>
		</>
	);
}

export default RecipePage;
