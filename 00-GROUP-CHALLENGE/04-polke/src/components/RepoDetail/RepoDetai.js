import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './RepoDetail.css';
import RepoInfoStore from '../../stores/repoDetailStore';
import { loadRepoInfo } from '../../actions/repoDetailActions';

function RepoDetail() {
	//repoInfo
	const [repoInfo, setrepoInfo] = useState([]);
	const [repoName, setrepoName] = useState('skylab-bootcamp-202007'); //obj.repoName
	const [orgName, setOrgName] = useState('SkylabCoders'); //obj.orgName
	const [userName, setUserName] = useState('Gilberto Cao'); //obj.userName

	useEffect(() => {
		RepoInfoStore.addChangeListener(onChange);
		if (repoInfo.length === 0) {
			loadRepoInfo(userName, repoName, orgName);
		}
		console.log(repoInfo);

		return () => RepoInfoStore.removeChangeListener(onChange);
	}, [repoInfo.length]);

	function onChange() {
		setrepoInfo(RepoInfoStore.getRepoInfo(userName));
	}
	console.log(repoInfo);

	return (
		<div className="carrousel-main-container">
			<Carousel interval={3000} className="user-repositorie generic-carrousel">
				<Carousel.Item>
					<h3>{userName}</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">Author's Name</h3>
						<h3>&#128202;</h3>
						<h4> {repoInfo.name}</h4>
						<h3 className="user-repositorie__category-title">Total Commits:</h3>
						<h3>&#128202;</h3>
						<h3> {repoInfo.authorCommitsLength}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>{userName}</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							Commits done in:
						</h3>
						<h3>&#128202;</h3>
						<h4> {repoInfo.time}</h4>
						<h3 className="user-repositorie__category-title">Last Activity:</h3>
						<h3>&#128202;</h3>
						<h4> {repoInfo.lastActivity}</h4>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>{userName}</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							Last commits messages:
						</h3>
						<h3>&#128202;</h3>
						{/* 	{repoInfo.authourLastComments && repoInfo.authourLastComments[0]} */}
						{repoInfo.authourLastComments &&
							repoInfo.authourLastComments.map((elem) => {
								return <h5>{elem}</h5>;
							})}
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Carousel interval={4000} className="group-repositorie generic-carrousel">
				<Carousel.Item>
					<h3>Repositorie Stats</h3>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Group </h3>
						<h3>&#128200;</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3>Repositorie Stats</h3>
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
					<h3>Repositorie Stats</h3>
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
					<h3>Ranking</h3>
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
					<h3>Ranking</h3>
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
					<h3>Ranking</h3>
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
