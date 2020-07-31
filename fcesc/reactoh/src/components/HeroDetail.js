import React from 'react';
import './HeroDetail.css';
import DisplayInlineArray from './DisplayInlineArray';
import ShowImage from './ShowImage';

function HeroDetail(props){
    let result = (        
        <div className="heroDetail">
            <div className="heroDetail__image">
                <ShowImage
                    imgUrl={props.hero.images.md}
                />
            </div>
            <div className="heroDetail__data">
                <h2>{props.hero.name}</h2>
                <p>Id: {props.hero.id}, real name: <strong>{props.hero.biography.fullName}</strong>, alter egos: {props.hero.biography.alterEgos}</p>
                <p>Place of birth: {props.hero.biography.placeOfBirth}, alias: <DisplayInlineArray aliases={props.hero.biography.aliases}/></p>
                <p>Race: {props.hero.appearance.race}, gender: {props.hero.appearance.gender}, height: {props.hero.appearance.height[1]}, weight: {props.hero.appearance.weight[1]}</p>
                <p>Occupation: {props.hero.work.occupation}, alignment: {props.hero.biography.alignment}</p>
                <p>First appearance: {props.hero.biography.firstAppearance}, publisher {props.hero.biography.publisher}</p>
                <button id="button__goBackToList" onClick={props.click}>Go back to list</button>
            </div>
        </div>
    );
    return result;
}

export default HeroDetail;