describe('Hero',function(){
    let prove_name='Agapito';
    let name='Narco';
    
    
    

    it('should show an error message when input dont match with heroes',function(){
        expect(get_details(prove_name)).toEqual('This is not a hero!!!');
    })

    it('should write id text if input match with heroes',function(){
        get_details(name);
        expect(id).toEqual('Id '+12); 
    })

    it('should write the details text if input match with heroes',function(){
        
        expect(get_details(name)).toEqual(name + ' details!');
            
    });


});
