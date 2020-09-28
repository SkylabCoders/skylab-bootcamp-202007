import React from 'react';
import diver from '../images/diver.jpg';
import kittiwake from '../images/kittiwake.jpg';
import '../styles/Main.css';

function Main() {
	return (
		<div className='main'>
			<div className='main__diver'>
				<img src={diver} alt='diver' />
			</div>
			<nav className='header__navigation'>
				<a href='/diver' className='header__navigation__button'>
					<span className='button__text'>Divers</span>
					<div className='button__text__wave'></div>
				</a>

				<a href='/dive-site' className='header__navigation__button'>
					<span className='button__text'>Dive Sites</span>
					<div className='button__text__wave'></div>
				</a>
			</nav>
			<div className='main__kittiwake'>
				<img src={kittiwake} alt='wreck' />
			</div>
		</div>
	);
}

export default Main;
