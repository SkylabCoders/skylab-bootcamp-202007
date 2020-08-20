import React from 'react'
import './Cover.css'

function Cover () {
    return (
        
        <div className='img__contain'>
            <img className='img__cover' src={require('../img/img-cover.jpg')} alt="Bookstore"/>
            <p className='img__title'>Leer nos hace libres</p>
        </div>
    )
}   

export default Cover;