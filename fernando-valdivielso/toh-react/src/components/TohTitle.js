import React from 'react';


function TohTitle() {
    return (
        // <> it's an empty tag to encapsulate the whole component and dissaperars upon compilation
        // in an URL of a list, we use the singular mode of the list
        <>
            <h1>Tour Of Heroes</h1>
            <nav>
                <button><a href='/dashboard'>Dashboard</a></button>
                <button><a href='/hero'>Heroes</a></button>
            </nav>
        </>
    )
}

export default TohTitle;