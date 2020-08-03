import React from 'react';

class Header extends React.Component{
    getHeader(){
        let result = (
            <header>
                <h1>Tour of Heroes</h1>
            </header>
        );
        return result;
    }

    render(){
        return this.getHeader();
    }
}

export default Header;