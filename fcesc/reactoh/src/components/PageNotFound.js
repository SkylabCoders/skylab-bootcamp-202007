import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/pageNotFound.css';
import * as ROUTES from './../config/routes';

class PageNotFound extends React.Component{
    
    getResult(){
        //<NavLink to={()=>{this.props.history.goBack()}}>Go back</NavLink>
        let p = (
            <div className="404__container">
                <h2>Error 404</h2>
                <p>Página no encontrada.</p>
                <NavLink to={ROUTES.HOME}>Página principal</NavLink>
            </div>
        )
        return p;
    }

    render(){
        return this.getResult();
    }
}

export default PageNotFound;