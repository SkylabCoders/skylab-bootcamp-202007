import React, {useState, useEffect} from 'react';
import './../css/heroDetail.css';
import DisplayInlineArray from './DisplayInlineArray';
import ShowImage from './ShowImage';
import HeroStore from './../stores/heroStore';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { loadHeroById } from './../actions/heroActions';
import * as ROUTES from './../config/routes';

function HeroDetail(){
    let urlQuery = useRouteMatch()
    let urlId = urlQuery.params.heroId;
    const [currentHero, setcurrentHero] = useState(undefined);
    const [_id] = useState(urlId);

    console.log('ENTERING HERODETAIL:', urlId, _id, currentHero);

    useEffect(()=>{
        HeroStore.addChangeListener(onChange);
        if( currentHero === undefined){ loadHeroById(_id) }
        return ()=>{HeroStore.removeChangeListener(onChange);}
    }, []);

    function onChange(){
        setcurrentHero(HeroStore.getHeroById(_id)); 
    }

    console.log('AFTER USEEFFECT BEFORE RENDERING:', urlId, _id, currentHero);

    return (        
        <div className="heroDetail">
            <h2>This is a test</h2>
            <div className="heroDetail__image">
                <ShowImage
                    imgUrl={currentHero.images.md}
                />
            </div>
            <div className="heroDetail__data">
                <h2>{currentHero.name}</h2>
                <p>Id: {currentHero.id}, real name: <strong>{currentHero.biography.fullName}</strong>, alter egos: {currentHero.biography.alterEgos}</p>
                <p>Place of birth: {currentHero.biography.placeOfBirth}, alias: <DisplayInlineArray aliases={currentHero.biography.aliases}/></p>
                <p>Race: {currentHero.appearance.race}, gender: {currentHero.appearance.gender}, height: {currentHero.appearance.height[1]}, weight: {currentHero.appearance.weight[1]}</p>
                <p>Occupation: {currentHero.work.occupation}, alignment: {currentHero.biography.alignment}</p>
                <p>First appearance: {currentHero.biography.firstAppearance}, publisher {currentHero.biography.publisher}</p>
                <NavLink to={ROUTES.HERO_LIST_PAGINATED_FIRST}>Go back to list</NavLink>
            </div>
        </div>
    );
}

export default HeroDetail;