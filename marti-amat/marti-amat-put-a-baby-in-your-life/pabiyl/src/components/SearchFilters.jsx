import React, { useState, useEffect } from "react";
import "./searchFilters.css";
import userStore from "../stores/userStore";
import authStore from "../stores/authStore";
import { loadDetails, filterList } from "../actions/detailAction";
import { Link } from "react-router-dom";
import ListUsers from "./ListUsers";
function SearchFilters(props) {
  const [email, setEmail] = useState(authStore.getUserEmail());
  const [lat1, setLat1] = useState();
  const [lon1, setLon1] = useState();
  const [gender, setGender] = useState();
  const [users, setUsers] = useState(userStore.getDetailUsers());
  let [usersList, setUsersList] = useState();
  const [ageDown, setAgeDown] = useState(18);
  const [ageUp, setAgeUp] = useState(90);
  const [distance, setDistance] = useState(150);
  const [withSons, setWithSons] = useState();
  const [withoutSons, setWithoutSons] = useState();
  const [withJob, setWithJob] = useState();
  const [withoutJob, setWithoutJob] = useState();
  const [single, setSingle] = useState();
  const [divorced, setDivorced] = useState();
  const [widow, setWidow] = useState();
  const [married, setMarried] = useState();
  const filters = {
    ageDown: { ageDown },
    ageUp: { ageUp },
    distance: { distance },
    withSons: { withSons },
    withoutSons: { withoutSons },
    withoutJob: { withoutJob },
    withJob: { withJob },
    single: { single },
    divorced: { divorced },
    widow: { widow },
    married: { married },
    gender: { gender },
  };

  function onFieldChange(value, setValue) {
    setValue(value);
  }
  useEffect(() => {
    userStore.addChangeListener(onChange);

    loadDetails();

    return () => userStore.removeChangeListener(onChange);
  }, []);
  function onChange() {
    setUsers(userStore.getDetailUsers());
    if (email) {
      setLat1(userStore.getDetailUserByEmail(email).latitude);
      setLon1(userStore.getDetailUserByEmail(email).longitude);
      if (userStore.getDetailUserByEmail(email).gender === "male") {
        setGender("female");
      } else {
        setGender("male");
      }
    }
  }
  let getKilometers = function (lat1, lon1, lat2, lon2) {
    let rad = function (x) {
      return (x * Math.PI) / 180;
    };
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3);
  };
  function usingFilters() {
    if (email) {
      if (!users) {
        loadDetails();
      } else {
        let userResult = users.filter(
          (element) =>
            element.age >= +ageDown &&
            element.age <= +ageUp &&
            +getKilometers(lat1, lon1, element.latitude, element.longitude) <=
              +distance &&
            ((element.sons > 0 && withSons === "yes") ||
              (element.sons === 0 && withoutSons === "no")) &&
            ((element.job === "yes" && withJob === "yes") ||
              (element.job === "no" && withoutJob === "no")) &&
            ((element.civilState === "single" && single === "single") ||
              (element.civilState === "divorced" && divorced === "divorced") ||
              (element.civilState === "widow" && widow === "widow") ||
              (element.civilState === "married" && married === "married")) &&
            element.gender === gender
        );
        setUsersList(userResult);
      }
    }
  }

  return (
    <div className="main__window">
      {!usersList && (
        <main className="main__search-filters">
          <form method="get" id="searchForm">
            <div className="filter__container ">
              <img
                className="filter__icon"
                src="https://image.flaticon.com/icons/svg/3021/3021790.svg"
                alt=""
              ></img>
              <div className="age__filter--text filter__text">from</div>
              <input
                className="input__filter"
                type="text"
                onChange={(event) =>
                  onFieldChange(event.target.value, setAgeDown)
                }
              ></input>
              <div className="age__filter--text filter__text">to</div>
              <input
                type="text"
                className="input__filter"
                onChange={(event) =>
                  onFieldChange(event.target.value, setAgeUp)
                }
              ></input>
            </div>
            <div className="filter__container">
              <img
                className="filter__icon"
                src="https://image.flaticon.com/icons/svg/1072/1072623.svg"
                alt=""
              ></img>
              <div className="distance__filter--text filter__text">
                less than{" "}
              </div>
              <input
                type="text"
                className="input__filter"
                onChange={(event) =>
                  onFieldChange(event.target.value, setDistance)
                }
              ></input>
              <div className="distance__filter--text filter__text"> km </div>
            </div>
            <div className="filter__container">
              <img
                alt=""
                className="filter__icon"
                src="https://image.flaticon.com/icons/svg/1761/1761430.svg"
              ></img>
              <input
                className="checkbox__input"
                type="checkbox"
                value="yes"
                onChange={(event) =>
                  onFieldChange(event.target.value, setWithSons)
                }
              ></input>
              <div className="sons__filter--text filter__text">yes</div>
              <input
                type="checkbox"
                className="checkbox__input"
                value="no"
                onChange={(event) =>
                  onFieldChange(event.target.value, setWithoutSons)
                }
              ></input>
              <div className="sons__filter--text filter__text">no</div>
            </div>
            <div className="filter__container">
              <img
                alt=""
                className="filter__icon "
                src="https://image.flaticon.com/icons/svg/1063/1063196.svg"
              ></img>
              <input
                type="checkbox"
                className="checkbox__input"
                value="yes"
                onChange={(event) =>
                  onFieldChange(event.target.value, setWithJob)
                }
              ></input>

              <div className="work__filter--text filter__text">yes</div>

              <input
                type="checkbox"
                className="checkbox__input"
                value="no"
                onChange={(event) =>
                  onFieldChange(event.target.value, setWithoutJob)
                }
              ></input>
              <div className="work__filter--text filter__text">no</div>
            </div>
            <div className="filter__container">
              <img
                alt=""
                className="filter__icon icon__civilState"
                src="https://image.flaticon.com/icons/svg/1102/1102457.svg"
              ></img>
              <div className="civilState__options">
                <div className="civilState__options--section">
                  <div className="civilState__options--file">
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      value="single"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setSingle)
                      }
                    ></input>
                    <div className="civilState__filter--text filter__text">
                      single
                    </div>
                  </div>
                  <div className="civilState__options--file">
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      value="divorced"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setDivorced)
                      }
                    ></input>
                    <div className="civilState__filter--text filter__text">
                      divorced
                    </div>
                  </div>
                </div>
                <div className="civilState__options--section">
                  <div className="civilState__options--file">
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      value="widow"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setWidow)
                      }
                    ></input>
                    <div className="civilState__filter--text filter__text">
                      widow
                    </div>
                  </div>
                  <div className="civilState__options--file">
                    <input
                      type="checkbox"
                      className="checkbox__input"
                      value="married"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setMarried)
                      }
                    ></input>
                    <div className="civilState__filter--text filter__text">
                      married
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                usingFilters();
              }}
              className="search-button"
              to="/listUsers/"
            >
              SEARCH!
            </button>
          </form>
        </main>
      )}
      {usersList && <ListUsers usersList={usersList} />}
    </div>
  );
}
export default SearchFilters;
