import React, { useState, useEffect } from 'react';

// User recibe unas props, nosotros las destucturamos
export default function User({ id }) {
	// Definimos user y decimos que empieza siendo null
	const [user, setUser] = useState(null);

	async function fetchUserData(userId) {
		const response = await fetch(`/${userId}`);
		setUser(await response.json());

		// Fetch recibe una respuesta a la cual tenemos que invocar la respuesta con un .json, al igual que en axios reciviamos un .data
	}

	useEffect(() => {
		fetchUserData(id);
	}, [id]);

	if (!user) {
		return 'loading...';
	}
	return (
		<details>
			<summary data-testid="name">{user.name}</summary>
			<strong>{user.age}</strong> years old
			<br />
			lives in {user.address}
		</details>
	);
}
