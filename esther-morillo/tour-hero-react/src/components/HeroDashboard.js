import React from 'react'


function HeroDashboard({ name }) {
    return ( 
        
        <div className="btn btn-secondary btn-sm">
            <a key={generate()} href="https://getbootstrap.com/" className="text-decoration-none text-center text-white">{name}</a>
        </div>
    )   
}

export default HeroDashboard;