import React from 'react';

function SignIn() {
	return (
		<>
			<form action="http://192.168.0.152:3000/auth/signin" method="POST">
				<div>
					<label for="user">
						User:
						<input type="text" name="user" required />
					</label>
				</div>

				<div>
					<label for="user">
						Password:
						<input type="password" name="password" required minlength="8" />
					</label>
				</div>

				<button type="submit">Save</button>
			</form>
		</>
	);
}
export default SignIn;
