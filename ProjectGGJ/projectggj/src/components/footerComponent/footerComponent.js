import React from 'react';

function FooterComponent() {
    return (
        <div>
            <button type="button" onClick={() => window.history.back()}>Back</button>
        </div>
    )
}

export default FooterComponent;