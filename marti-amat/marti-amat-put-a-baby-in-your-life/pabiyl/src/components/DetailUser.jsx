import React, { useState, useEffect } from "react";
import userStore from "../stores/userStore";
import { loadDetails } from "../actions/detailAction";
import { NavLink } from "react-router-dom";

import "./detailUser.css";

function DetailUser(props) {
  let detailUserId = null;
  const [detailUsers, setDetailUsers] = useState(userStore.getDetailUsers());
  const [detailElement, setDetailElement] = useState({});
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [civilState, setCivilState] = useState();
  const [sons, setSons] = useState();
  const [job, setJob] = useState();
  const [presentation, setPresentation] = useState();
  const [mainImage, setMainImage] = useState();
  const [secondImage, setSecondImage] = useState();
  const [thirdImage, setThirdImage] = useState();

  useEffect(() => {
    userStore.addChangeListener(onChange);

    detailUserId = props.match.params.detailUserId;
    if (detailUsers.length === 0) {
      loadDetails();
    } else if (detailUserId) {
      const detailUser = userStore.getDetailUserById(detailUserId);
      if (detailUser) {
        setDetailElement(detailUser);
        setName(detailUser.name);
        setGender(detailUser.gender);
        setAge(detailUser.age);
        setCity(detailUser.city);
        setCountry(detailUser.country);
        setCivilState(detailUser.civilState);
        setSons(detailUser.sons);
        setJob(detailUser.job);
        setPresentation(detailUser.presentation);
        setMainImage(detailUser.mainImage);
        setSecondImage(detailUser.secondImage);
        setThirdImage(detailUser.thirdImage);
      }
    }
    return () => userStore.removeChangeListener(onChange);
  }, [detailUsers.length, detailElement, detailUserId, onChange]);

  function onChange() {
    setDetailUsers(userStore.getDetailUsers());
  }
  const link = "/emailEdit/" + detailElement._id;
  return (
    <main className="main__detail">
      <div className="main__detail--top">
        <div className="left-side">
          <section className="container__info">
            <div className="text__detail name__detail"> {name}</div>
            <div className="container__bottom--detail">
              <div className="container">
                <div className="container__detail">
                  <img
                    alt="gender"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/3260/3260246.svg"
                  ></img>
                  <div className="text__detail">{gender}</div>
                </div>
                <div className="container__detail">
                  <img
                    alt="age"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/3021/3021790.svg"
                  ></img>
                  <div className="text__detail">{age}</div>
                </div>
              </div>
              <div className="container">
                <div className="container__detail">
                  <img
                    alt="City"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/888/888063.svg"
                  ></img>
                  <div className="text__detail">{city}</div>
                </div>
                <div className="container__detail">
                  <img
                    alt="country"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/3455/3455212.svg"
                  ></img>
                  <div className="text__detail">{country}</div>
                </div>
              </div>
              <div className="container group-three">
                <div className="container__detail">
                  <img
                    alt="civil state"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/1102/1102457.svg"
                  ></img>
                  <div className="text__detail">{civilState}</div>
                </div>
                <div className="container__detail">
                  <img
                    alt="sons"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/1761/1761430.svg"
                  ></img>
                  <div className="text__detail">{sons}</div>
                </div>
                <div className="container__detail">
                  <img
                    alt="job"
                    className="icon__detail"
                    src="https://image.flaticon.com/icons/svg/1063/1063196.svg"
                  ></img>
                  <div className="text__detail">{job}</div>
                </div>
              </div>
            </div>

            <NavLink className="buttons bt__inside" to={link}>
              <button className="buttonE-mail"></button>
            </NavLink>
          </section>
          <section className="left-side__bottom">
            <img className="image__secundary" src={secondImage} alt=""></img>
            <img className="image__secundary" src={thirdImage} alt=""></img>
          </section>
        </div>
        <section className="right-side__detail">
          <img className="image__main" src={mainImage} alt=""></img>
          <NavLink className="buttons bt__outside" to={link}>
            <button className="buttonE-mail--outside"></button>
          </NavLink>
        </section>
      </div>
      <div className="presentation">{presentation}</div>
    </main>
  );
}
export default DetailUser;
