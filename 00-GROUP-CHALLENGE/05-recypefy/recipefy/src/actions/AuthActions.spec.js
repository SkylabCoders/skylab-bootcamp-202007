import {
	login,
	logout,
	googleLogin,
	anonymousLogin,
	createUser
} from './AuthActions';
import { authMethods } from '../firebase/firebaseAuthMethods';

describe('AuthActions', () => {
	const email = 'usuario.prueba@mail.com';
	const password = '123456';
	const user = {
		email: email,
		password: password
	};
	jest.mock('../firebase/firebaseAuthMethods');

	it('should return error', async () => {
		const errorPasword = '123pasword';
		try {
			const myActualUser = await login(email, errorPasword);
			expect(myActualUser).not.toBeDefined();
		} catch (error) {
			const messageError = 'Error in loggin process';
			expect(error).toEqual(messageError);
		}
	});

	it('should return user', async () => {
		authMethods.signin.mockResolvedValue(user);
		const myActualUser = await login(email, password);
		expect(myActualUser).toEqual(user.email);
	});
});
