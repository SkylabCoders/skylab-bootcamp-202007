import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import lessonsStore from '../../stores/LessonsStore'
import "./LessonItemComponent.scss";

function LessonItem({ id }) {
  const [lessons, setLessons] = useState(lessonsStore.getLessons());
  const [actualLessonPhoto, setActualLessonPhoto] = useState("");
  const [actualLessonTitle, setActualLessonTitle] = useState("");


  useEffect(() => {
    lessonsStore.addChangeListener(onChange);
    if (lessons.length === 0) {
      lessonsStore.getLessons();
    } else {
      const actualLesson = lessonsStore.getLessonById(id);
      if (actualLesson) {
        setActualLessonTitle(actualLesson.title);
        setActualLessonPhoto(actualLesson.photo);
      }
    }
    return () => {
      lessonsStore.removeChangeListener(onChange);
    };
  }, [lessons.length]);

  function onChange() {
    setLessons(lessonsStore.getLessons());
  }

  return (
    <div className="group-card__container">
      <div className="group-card__photo">
        <img src={actualLessonPhoto} alt="Photo" />
      </div>
      <div className="group-details__container">
        <div className="group-title">
          <h2>{actualLessonTitle}</h2>
        </div>
        <div className="details__info group-detail__info">
          <div className="details__left group-detail__left">
            <NavLink to={`/lessons/${id}`} className="join-button">
              See More
            </NavLink>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LessonItem;
