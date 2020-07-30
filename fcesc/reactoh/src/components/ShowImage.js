import React from 'react';

function ShowImage(props){
    let result = (        
        <img src={props.imgUrl} alt=""/>
    );
    return result;
}

export default ShowImage;