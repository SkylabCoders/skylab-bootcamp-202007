import React from "react";
import "./HomePageComponent.scss";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home__main__container">
      
   <div className="page__link ">
        <img
          src="https://www.coe.int/documents/24916852/0/Supporters3.jpg/63b405d6-be6d-d2ec-bd11-0f03c6ca8130?t=1503553460000"
          alt=""
        />
         <Link to="events" className="home__anchor">
        <div className="page__title">
          <h2>EVENTS</h2>
        </div>
      </Link>
      </div>
   
      <div className="page__link">
        <img
          src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg"
          alt=""
        />
         <Link to="groups" className="home__anchor">
        <div className="page__title">
          <h2>GROUPS</h2>
        </div>
        </Link>
      </div>
      <div className="page__link">
        <img
          src="https://www.pamburridge.com/images/home/surfing-lessons-mollymook-full.jpg"
          alt=""
        />
         <Link to="lessons" className="home__anchor">
        <div className="page__title">
          <h2>LESSONS</h2>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
