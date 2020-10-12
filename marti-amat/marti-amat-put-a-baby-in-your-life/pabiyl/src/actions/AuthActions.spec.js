import { login, googleLogin, logout, anonymousLogin, createUser } from './authActions';


describe('Test set for authentication actions', () => {
    const email = 'me' + '@' + 'test.mail';
    const password = 'abc' + '123';
    test('Test login action from authentication actions, should not be undefined', () => {

        expect(login(email, password)).toBeDefined();
    })
    test('Test loginGoogle action from authentication actions, should not be undefined', () => {
        expect(googleLogin()).toBeDefined();
    })
    test('Test anonymous login action from authentication actions, should not be undefined', () => {
        expect(anonymousLogin()).toBeDefined();
    })
    test('Test logout action from authentication actions, should not be undefined', () => {
        expect(logout()).toBeDefined();
    })
    test('Test createUser action from authentication actions, should not be undefined', () => {

        expect(createUser(email, password)).toBeDefined();
    })

})