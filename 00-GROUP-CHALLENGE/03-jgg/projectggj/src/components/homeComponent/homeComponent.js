import React from 'react';
import CharListComponent from '../charListComponent/charListComponent';
import BannerComponent from '../bannerComponent/bannerComponent';

function HomeComponent(props) {
    return <>

        <p>homeComponent works!</p>
        <BannerComponent />
        <CharListComponent />

    </>
}

export default HomeComponent;