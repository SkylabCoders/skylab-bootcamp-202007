import React from 'react'


function HeroDetail({ id, name }) {
    return (
        <>
            <div>
                <h2>{name} details!</h2>
                <p>id:<span>{id}</span></p>
                <label>name:<input></input></label>
            </div>
        </>
    );
}

export default HeroDetail;