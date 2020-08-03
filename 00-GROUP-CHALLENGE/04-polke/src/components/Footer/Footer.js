import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer__container footer__container--color ">
			<p className="footer__item">
				Copyright &copy;{' '}
				<a href="https://github.com/Dani-Alonso" target="_blank">
					Dani Alonso
				</a>{' '}
				|{' '}
				<a href="https://github.com/phortelano" target="_blank">
					Pablo Hortelano
				</a>{' '}
				|{' '}
				<a href="https://github.com/gerardramonp" target="_blank">
					Gerard Ramon
				</a>
			</p>

			<a
				href="https://github.com/SkylabCoders/skylab-bootcamp-202007/tree/master/00-GROUP-CHALLENGE/04-polke"
				target="_blank"
				className="footer__item"
			>
				About
			</a>
		</div>
	);
}

export default Footer;
