import React, { useState, useEffect } from 'react';

export default function User({ id }) {
	const [user, setUser] = useState(null);

	async function fetchUserData(userId) {
		const response = await fetch(`/${userId}`);
		setUser(await response.json());
	}

	useEffect(() => {
		fetchUserData(id);
	}, [id]);

	if (!user || !id) {
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
