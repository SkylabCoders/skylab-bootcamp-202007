import React, { useState, useEffect } from "react";
import lessonsStore from '../../stores/LessonsStore'
import { loadLessons } from "../../actions/LessonAction";
import './LessonsListComponent.scss'
import LessonItem from '../lessons-item-component/LessonItemComponent'

function LessonsList() {
  const [lessons, setLessons] = useState(lessonsStore.getLessons());

  useEffect(() => {
    lessonsStore.addChangeListener(onChange);
    if (lessons.length === 0) loadLessons();
    return () => {
      lessonsStore.removeChangeListener(onChange);
    };
  }, [lessons.length]);

  function onChange() {
    setLessons(lessonsStore.getLessons());
  }

  return(
      <>
        <div className="banner__container">
          <img src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg" alt="" />
          <div className="banner__container-title">
            <h1>GROUPS</h1>
          </div>
        </div>
        <ul className="main__ul__container">
            {lessons.map((lesson) => (
                <li key={lesson._id}>
                    <LessonItem id={lesson._id}/>
                </li>
            ))}
        </ul>
      </>
  )
}

export default LessonsList;
