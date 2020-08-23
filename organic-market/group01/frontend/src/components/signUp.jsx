import React from 'react';
import { SignUp } from '../actions/authActions';
import authStore from '../stores/authStore';

function SignUp() {
	const [isLogged, setIsLogged] = useState(authStore.isLogged());
	const [user, setUser] = useState(authStore.getUserProfile());
	return (
		<>
			<div>
				<label htmlFor="user">
					User:
					<input type="text" name="user" required />
				</label>
			</div>

			<div>
				<label htmlFor="user">
					Password:
					<input type="password" name="password" required minLength="8" />
				</label>
			</div>

			<button type="submit">Save</button>
		</>
	);
}
export default SignUp;
