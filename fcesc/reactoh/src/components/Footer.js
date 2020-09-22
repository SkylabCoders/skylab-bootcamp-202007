import React from 'react';

class Footer extends React.Component{

    getFooter(){
        let result = (
            <footer>
                <p><a href='https://www.skylabcoders.com/es/'>Skylab</a> bootcamp 202007 - Francesc Brugarolas</p>
            </footer>
        );
        return result;
    }

    render(){
        return this.getFooter();
    }
}

export default Footer;