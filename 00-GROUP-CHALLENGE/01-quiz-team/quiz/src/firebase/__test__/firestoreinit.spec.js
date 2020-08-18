import { db } from './../firestoreinit';

describe('Test set for firestore init', ()=>{
    test('Test that db is not empty', ()=>{
        expect(db).toBeDefined();
    })
})