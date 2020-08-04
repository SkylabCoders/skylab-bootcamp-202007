import React, { useState, useEffect } from 'react';

const film = [
	{
		title: 'The Dark Knight',
		year: 2008,
		duration: '2h 32min',
		genres: ['Action', 'Crime', 'Drama'],
		actors: [
			{
				name: 'Christian Bale',
				img:
					'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UX214_CR0,0,214,317_AL_.jpg'
			},
			{
				name: 'Heath Ledger',
				img:
					'https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_UX214_CR0,0,214,317_AL_.jpg'
			},
			{
				name: 'Aaron Eckhart',
				img:
					'https://m.media-amazon.com/images/M/MV5BMTc4MTAyNzMzNF5BMl5BanBnXkFtZTcwMzQ5MzQzMg@@._V1_UY317_CR6,0,214,317_AL_.jpg'
			}
		],
		director: {
			name: 'Christopher Nolan',
			img:
				'https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_UY317_CR7,0,214,317_AL_.jpg'
		},
		plot:
			'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
	}
];

export default film;
