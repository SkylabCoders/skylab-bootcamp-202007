import React, { useState, useEffect } from 'react';
import './navComponent.css';
import authStore from '../../stores/authStore';
import store from '../../stores/store'
import { globalSearch } from '../../actions/actions';
import { Link } from 'react-router-dom';
import useSound from "use-sound";
import { loadCharList } from '../../actions/actions'
import introSound from "../../sounds/intro.mp3";


function NavComponent(props) {

	const [introSong] = useSound(introSound);

	const [isLogged, setIsLogged] = useState(authStore.isLogged());
	const [search, setSearch] = useState('');
	let [, , , , filter, name] = window.location.href.split('/');
	useEffect(() => {
		authStore.addChangeListener(onAuthChange);
		if (store.getSearchValue().text !== '') loadCharList(filter, name);
		return () => authStore.removeChangeListener(onAuthChange)
	}, [isLogged, filter, name])

	function onAuthChange() {
		setIsLogged(authStore.isLogged())
	}

	function handleChange(event, setValueCallback) {
		event.preventDefault();
		setValueCallback(event.target.value);
		globalSearch(event.target.value, filter, name);
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				<img
					src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png"
					width="30"
					alt="Dragon Ball One Start"
					loading="lazy"
				/>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#global-area__menu"
				aria-controls="global-area__menu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="global-area__menu">
				<ul className="navbar-nav mr-auto">
					{!isLogged && (
						<li className="nav-item">
							<Link className="nav-link" to="/login">
								Login
						</Link>
						</li>
					)}
					{isLogged && (
						<li className="nav-item">
							<Link className="nav-link" to="/login">
								Logout
							</Link>
						</li>
					)}
					{isLogged && (
						<li className="nav-item">
							<Link className="nav-link" to="/profile">
								Profile <span className="sr-only"></span>
							</Link>
						</li>
					)}
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/planet">
							Planets
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/saga">
							Sagas
						</Link>
					</li>

					<li onClick={() => introSong()} className="nav-item">
						<Link className="nav-link nav__button--game" to="/game/Machine">
							Game
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							About us
						</Link>

					</li>
				</ul>
				<form className="form-inline my-2 my-md-0">
					<input
						value={search}
						onChange={(event) => handleChange(event, setSearch)}
						className="form-control"
						type="text"
						placeholder="Dragon search..."
					/>
				</form>
			</div>
		</nav>
	);
}

export default NavComponent;
