import React from 'react'

function Header(props) {
    return (
        <>
            <h1>Tour of Heroes</h1>
            <nav>
                {/* Dirección que veremos en la url y se usa siempre en singular (/hero). Y el parámetro singular/id => hero/id (o lo que sea) */}
                <a href="/dashboard">Dashboard</a> | <a href="/hero">Heroes</a>
            </nav>
        </>
    )
}

export default Header;