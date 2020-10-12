import React from "react";
import { useState, useEffect } from "react";
import "./LessonsDetailsComponent.scss";
import { loadLessons } from "../../actions/LessonAction";
import lessonsStore from "../../stores/LessonsStore";
import { useAuth0 } from "@auth0/auth0-react";

function LessonDetail(props) {
  const { user, isAuthenticated } = useAuth0();

  const [lessons, setLessons] = useState(lessonsStore.getLessons());
  const [lessonId, setLessonId] = useState(props.match?.params?.lessonId);
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonPhoto, setLessonPhoto] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [lessonLevel, setLessonLevel] = useState("");
  const [lessonPrice, setLessonPrice] = useState("");
  const [lessonDuration, setLessonDuration] = useState("");

  const [isBooked, setIsBooked] = useState(null);

  useEffect(() => {
    lessonsStore.addChangeListener(onChange);
    if (lessons.length === 0) {
      (async function loadAllLessons() {
        await loadLessons();
      })();
    } else if (lessonId) {
      const lesson = lessonsStore.getLessonById(lessonId);

      if (lesson) {
        setLessonId(lesson._id);
        setLessonTitle(lesson.title);
        setLessonPhoto(lesson.photo);
        setLessonDescription(lesson.description);
        setLessonLevel(lesson.level);
        setLessonPrice(lesson.price);
        setLessonDuration(lesson.duration);
        // (async function userLoading() {
        //   await loadUser(user?.sub);
        //   setMongoUser(userStore.getUser());
        //   const toogleButton = mongoUser?.lessons.some((item) => {
        //     return item === lessonId;
        //   });
        //   setMember(toogleButton);
        // })();
      }
    }
    return () => lessonsStore.removeChangeListener(onChange);
  }, [lessons]);

  function onChange() {
    setLessons(lessonsStore.getLessons());
  }

  //   function onSubmit(lessonId, user){
  //     (async function userLoading() {
  //       await loadUser(user?.sub);
  //       setMongoUser(userStore.getUser());
  //       const toogleButton = mongoUser?.lessons.some((item) => {
  //         return item === lessonId;
  //       });
  //       setMember(toogleButton);
  //       memberJoin(lessonId, user)
  //     })();
  //   }

  return (
    <>
      <div className="banner__container">
        <img
          src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg"
          alt=""
        />
        <div className="banner__container-title">
          <h1>LESSON</h1>
        </div>
      </div>
      <div className="lesson-detail__container">
        <div className="lesson-detail__left">
          <div className="lesson-header__container">
            <div className="lesson-title">
              <h2>{lessonTitle}</h2>
            </div>
            <img src={lessonPhoto} alt="lesson-photo" />
          </div>
          <div className="map-title">
            <h3>WHERE?</h3>
          </div>
          <div className="lesson-map">
            <img
              src="https://docs.microsoft.com/es-es/azure/azure-maps/media/migrate-google-maps-web-app/simple-google-map.png"
              alt="lesson-map"
            />
          </div>
        </div>
        <div className="lesson-info__container">
          <div className="lesson-description__container">
            <div className="lesson-description-title">
              <h3>Description</h3>
            </div>
            <div className="lesson-description-paragraph">
              <p>{lessonDescription}</p>
            </div>
          </div>
          <div className="lesson-info__bottom">
            <div className="lesson-specifications">
              <div className="lesson-level">
                <h4 className="specification-title__size">Level</h4>
                <p className="specification-paragraph__size">{lessonLevel}</p>
              </div>
              <div className="lesson-price">
                <h4 className="specification-title__size">Price</h4>
                <p className="specification-paragraph__size">{lessonPrice}€</p>
              </div>
              <div className="lesson-duration">
                <h4 className="specification-title__size">Duration</h4>
                <p className="specification-paragraph__size">{lessonDuration} mins.</p>
              </div>
            </div>
            <div>
              <div className="lesson-inscription">
                {!isAuthenticated && (
                  <h4>You Need to Login if you want to book the lesson..</h4>
                )}
                {isAuthenticated && (
                  <div className="lesson-detail-buttons">
                    <div className="lesson-button__container">
                      <button className="inscription__button">Dates!</button>
                    </div>
                    <div className="lesson-button__container">
                      <button className="inscription__button">Book!</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonDetail;
