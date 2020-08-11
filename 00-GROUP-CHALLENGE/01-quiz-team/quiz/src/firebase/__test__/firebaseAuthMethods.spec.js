import { authMethods } from './../firebaseAuthMethods';

describe('Test set for firebase authentication methods', ()=>{
    test('Test that the signIn function does not return undefined', ()=>{
        const email = 'me@test.mail';
        const password = 'abc123';
        const result = authMethods.signIn(email, password);
        expect(result).toBeDefined();
    })
    test('Test that the signInWithGoogle function does not return undefined', ()=>{
        const result = authMethods.signInWithGoogle();
        expect(result).toBeDefined();
    })
    test('Test that the signOut function does not return undefined', ()=>{
        const result = authMethods.signOut();
        expect(result).toBeDefined();
        
    })
})