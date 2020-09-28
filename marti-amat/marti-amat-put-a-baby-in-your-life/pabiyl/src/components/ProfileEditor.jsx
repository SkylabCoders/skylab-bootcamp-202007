import React, { useState, useEffect } from "react";
import "./profileEditor.css";
import { saveUser, updateUser } from "../actions/detailAction";
import { getCoordinates } from "../actions/coordinateAction";
import firebase from "firebase";
import userStore from "../stores/userStore";
import authStore from "../stores/authStore";
import coordinateStore from "../stores/coordinateStore";
import { NavLink } from "react-router-dom";

function ProfileEditor(props) {
  const [user, setUser] = useState();
  const [uploadValue, setUploadValue] = useState(0);
  const [uploadValue2, setUploadValue2] = useState(0);
  const [uploadValue3, setUploadValue3] = useState(0);
  const [icon, setIcon] = useState(false);
  const [picture, setPicture] = useState(null);
  let [_id, set_id] = useState();
  let [urlPicture, setUrlPicture] = useState();
  let [urlPicture2, setUrlPicture2] = useState();
  let [urlPicture3, setUrlPicture3] = useState();
  let [name, setName] = useState();
  let [email, setEmail] = useState(authStore.getUserEmail());
  let [gender, setGender] = useState();
  let [age, setAge] = useState();
  let [city, setCity] = useState();
  let [country, setCountry] = useState();
  let [civilState, setCivilState] = useState();
  let [sons, setSons] = useState();
  let [job, setJob] = useState();
  let [presentation, setPresentation] = useState();
  let [mainImage, setMainImage] = useState();
  let [secondImage, setSecondImage] = useState();
  let [thirdImage, setThirdImage] = useState();
  const [coordinates, setCoordinates] = useState();
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();

  function onFieldChange(value, setValue) {
    setValue(value);
  }

  function postUserProfile(event) {
    event.preventDefault();

    getCoordinates(city);
  }

  useEffect(() => {
    coordinateStore.addChangeListener(onChange);
    return () => coordinateStore.removeChangeListener(onChange);
  }, [onChange]);
  function onChange() {
    setTimeout(() => {
      latitude = coordinateStore.getCoordinates().data[0].lat;
      longitude = coordinateStore.getCoordinates().data[0].lon;
      if (email) {
        if (!userStore.getDetailUserByEmail(email)) {
          saveUser({
            name,
            gender,
            age,
            city,
            country,
            civilState,
            sons,
            job,
            presentation,
            mainImage,
            secondImage,
            thirdImage,
            email,
            latitude,
            longitude,
          });
        } else {
          const user = userStore.getDetailUserByEmail(email);
          _id = user._id;
          if (!name) {
            name = user.name;
          }
          if (!gender) {
            gender = user.gender;
          }
          if (!age) {
            age = user.age;
          }
          if (!city) {
            city = user.city;
            latitude = user.latitude;
            longitude = user.longitude;
          }
          if (!country) {
            country = user.country;
          }
          if (!civilState) {
            civilState = user.civilState;
          }
          if (!sons) {
            sons = user.sons;
          }
          if (!job) {
            job = user.job;
          }
          if (!presentation) {
            presentation = user.presentation;
          }
          if (!mainImage) {
            mainImage = user.mainImage;
          }
          if (!secondImage) {
            secondImage = user.secondImage;
          }
          if (!thirdImage) {
            thirdImage = user.thirdImage;
          }
          if (!latitude) {
            latitude = user.latitude;
          }
          if (!longitude) {
            longitude = user.longitude;
          }
          updateUser({
            _id,
            name,
            gender,
            age,
            city,
            country,
            civilState,
            sons,
            job,
            mainImage,
            secondImage,
            thirdImage,
            presentation,
            email,
            latitude,
            longitude,
          });
        }
      }
    }, 2000);
  }

  function onUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    const urlPicture = storageRef.getDownloadURL();

    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setUploadValue(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      (result) => {
        storageRef.getDownloadURL().then(function (result) {
          setUrlPicture(result);
          setThirdImage(result);
        });
      }
    );
  }
  function onUpload2(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    const urlPicture = storageRef.getDownloadURL();

    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setUploadValue2(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      (result) => {
        storageRef.getDownloadURL().then(function (result) {
          setUrlPicture2(result);
          setSecondImage(result);
        });
      }
    );
  }
  function onUpload3(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/photos/${file.name}`);
    const urlPicture = storageRef.getDownloadURL();

    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setUploadValue3(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      (result) => {
        storageRef.getDownloadURL().then(function (result) {
          setUrlPicture3(result);
          setMainImage(result);
        });
      }
    );
  }

  return (
    <main className="main__detail">
      <form method="get" id="profileForm">
        <div className="left-side">
          <section className="container__info--profile">
            <div className="container">
              <input
                placeholder="name"
                type="text"
                onChange={(event) => onFieldChange(event.target.value, setName)}
                className="input__name text__detail--profile"
              ></input>

              <div className="container__detail">
                <img
                  alt="gender"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/3260/3260246.svg"
                ></img>
                <input
                  type="radio"
                  className="checkbox"
                  name="gender"
                  value="male"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setGender)
                  }
                ></input>

                <div className="work__filter--text filter__text">male</div>

                <input
                  type="radio"
                  className="checkbox"
                  name="gender"
                  value="female"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setGender)
                  }
                ></input>
                <div className="work__filter--text filter__text">female</div>
              </div>
              <div className="container__detail">
                <img
                  alt="age"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/3021/3021790.svg"
                ></img>
                <input
                  placeholder="age"
                  type="text"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setAge)
                  }
                  className="text__detail--profile"
                ></input>
              </div>
              <div className="container__detail">
                <img
                  alt="City"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/888/888063.svg"
                ></img>
                <input
                  placeholder="city"
                  type="text"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setCity)
                  }
                  className="text__detail--profile"
                ></input>
              </div>
            </div>
            <div className="container">
              <div className="container__detail">
                <img
                  alt="country"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/3455/3455212.svg"
                ></img>
                <input
                  placeholder="country"
                  type="text"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setCountry)
                  }
                  className="text__detail--profile"
                ></input>
              </div>
              <div className="container__detail">
                <img
                  alt="civil state"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/1102/1102457.svg"
                ></img>
                <div className="civil__chekbox--container">
                  <div className="civil__chekbox--container-side">
                    <input
                      type="radio"
                      className="checkbox"
                      name="civilState"
                      value="single"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setCivilState)
                      }
                    ></input>

                    <div className="work__filter--text filter__text">
                      single
                    </div>

                    <input
                      type="radio"
                      className="checkbox"
                      name="civilState"
                      value="divorced"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setCivilState)
                      }
                    ></input>
                    <div className="work__filter--text filter__text">
                      divorced
                    </div>
                  </div>
                  <div className="civil__chekbox--container-side">
                    <input
                      type="radio"
                      className="checkbox"
                      name="civilState"
                      value="widow"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setCivilState)
                      }
                    ></input>

                    <div className="work__filter--text filter__text">widow</div>

                    <input
                      type="radio"
                      className="checkbox"
                      name="civilState"
                      value="married"
                      onChange={(event) =>
                        onFieldChange(event.target.value, setCivilState)
                      }
                    ></input>
                    <div className="work__filter--text filter__text">
                      married
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__detail">
                <img
                  alt="sons"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/1761/1761430.svg"
                ></img>
                <input
                  placeholder="sons"
                  type="text"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setSons)
                  }
                  className="text__detail--profile"
                ></input>
              </div>
              <div className="container__detail">
                <img
                  alt="job"
                  className="icon__detail"
                  src="https://image.flaticon.com/icons/svg/1063/1063196.svg"
                ></img>
                <input
                  type="radio"
                  className="checkbox"
                  name="job"
                  value="yes"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setJob)
                  }
                ></input>

                <div className="work__filter--text filter__text">yes</div>

                <input
                  type="radio"
                  className="checkbox"
                  name="job"
                  value="no"
                  onChange={(event) =>
                    onFieldChange(event.target.value, setJob)
                  }
                ></input>
                <div className="work__filter--text filter__text">no</div>
              </div>
            </div>
          </section>
          <section className="left-side__bottom">
            {!urlPicture && (
              <div className="image__secundary no-photo">
                <input
                  type="file"
                  id="img-uploader"
                  className="hidden"
                  onChange={onUpload}
                />
                <label className="label" htmlFor="img-uploader">
                  Upload photos
                </label>
                {uploadValue && (
                  <progress
                    className="progressBar"
                    value={uploadValue}
                    max="100"
                  ></progress>
                )}
              </div>
            )}
            {urlPicture && (
              <img
                className="image__secundary"
                width="320"
                src={urlPicture}
                alt=""
              ></img>
            )}
            {!urlPicture2 && (
              <div className="image__secundary no-photo">
                <input
                  type="file"
                  id="img2-uploader"
                  className="hidden"
                  onChange={onUpload2}
                />
                <label className="label" htmlFor="img2-uploader">
                  Upload photos
                </label>
                {uploadValue2 && (
                  <progress
                    className="progressBar"
                    value={uploadValue2}
                    max="100"
                  ></progress>
                )}
              </div>
            )}
            {urlPicture2 && (
              <img
                className="image__secundary"
                width="320"
                src={urlPicture2}
                alt=""
              ></img>
            )}
          </section>
        </div>
        <section className="right-side__detail">
          {!urlPicture3 && (
            <div className="image__main--profile no-photo">
              <input
                type="file"
                id="img3-uploader"
                className="hidden"
                onChange={onUpload3}
              />
              <label className="label" htmlFor="img3-uploader">
                Upload photos
              </label>
              {uploadValue3 && (
                <progress
                  className="progressBar"
                  value={uploadValue3}
                  max="100"
                ></progress>
              )}
            </div>
          )}
          {urlPicture3 && (
            <img
              className="image__main--profile"
              width="320"
              src={urlPicture3}
              alt=""
            ></img>
          )}
        </section>
        <div className="bottom-side">
          <input
            type="text"
            onChange={(event) =>
              onFieldChange(event.target.value, setPresentation)
            }
            placeholder="presentation"
            className="presentation--profile"
          ></input>
          <div className="button__container">
            <button onClick={postUserProfile} className="post-button">
              LOAD!
            </button>

            {icon && (
              <img
                className="icon__detail"
                src="https://www.flaticon.es/svg/static/icons/svg/3472/3472620.svg"
              ></img>
            )}
            <NavLink className="navLink__exit" to="/main">
              COME BACK
            </NavLink>
          </div>
        </div>
      </form>
    </main>
  );
}
export default ProfileEditor;
