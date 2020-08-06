import React from 'react';
import { Carousel } from 'react-bootstrap';
import './RepoDetail.css';

function RepoDetail() {
	return (
		<div className="carrousel-main-container">
			<Carousel interval={5000} className="user-repositorie generic-carrousel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>User repositorie</h3>
						<h3>&#128202;</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Carousel interval={4000} className="group-repositorie generic-carrousel">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Group repositorie</h3>
						<h3>&#128200;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Group repositorie</h3>
						<h3>&#128200;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Group repositorie</h3>
						<h3>&#128200;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Carousel
				interval={3000}
				className="ranking-repositorie generic-carrousel"
			>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://todoparaelcomercio.com/450-home_default/bobina-polipropileno-con-fondo-fuxia.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Ranking repositorie</h3>
						<h3>&#128201;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://todoparaelcomercio.com/450-home_default/bobina-polipropileno-con-fondo-fuxia.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Ranking repositorie</h3>
						<h3>&#128201;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://todoparaelcomercio.com/450-home_default/bobina-polipropileno-con-fondo-fuxia.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Ranking repositorie</h3>
						<h3>&#128201;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default RepoDetail;
