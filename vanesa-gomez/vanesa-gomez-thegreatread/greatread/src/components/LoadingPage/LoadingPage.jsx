import React from 'react';
import './loadingPage.scss';

function LoadingPage() {
    return (
        <div className="spinner-container">
            <img
                className="spinner"
                alt="spinner"
                width="150px"
                height="150px"
                src="https://static.wixstatic.com/media/332553_2c00ce4bd4e84416bae88ea4d1405950~mv2.gif"
            />
        </div>
    );
}

export default LoadingPage;
