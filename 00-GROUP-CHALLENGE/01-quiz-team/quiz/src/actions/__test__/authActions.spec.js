import { login, loginGoogle, logout } from './../authActions';
import * as MOCKUSER from './../../mockdata/User';
// import authStore from './../../stores/authStore';

describe('Test set for authentication actions', ()=>{
    test('Test login action from authentication actions, should not be undefined', ()=>{
        const email = MOCKUSER.email;
        const password = MOCKUSER.password;
        expect(login(email, password)).toBeDefined();
    })
    test('Test loginGoogle action from authentication actions, should not be undefined', ()=>{
        expect(loginGoogle()).toBeDefined();
    })
    test('Test logout action from authentication actions, should not be undefined', ()=>{
        expect(logout()).toBeDefined();
    })
    // test('Test login action from authentication actions, send data to store', async ()=>{
    //     await login(email, password);
    //     expect(authStore.isLogged()).toBe(true);
    // })
})