import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import groupStore from "../../stores/GroupStore";
import "./GroupItemComponent.scss";

function GroupItem({ id }) {
  const [groups, setGroups] = useState(groupStore.getGroups());
  const [actualGroupPhoto, setActualGroupPhoto] = useState("");
  const [actualGroupTitle, setActualGroupTitle] = useState("");
  const [membersArray, setMembersArr] = useState();


  useEffect(() => {
    groupStore.addChangeListener(onChange);
    if (groups.length === 0) {
      groupStore.getEvents();
    } else {
      const actualGroup = groupStore.getGroupById(id);
      if (actualGroup) {
        setActualGroupTitle(actualGroup.title);
        setActualGroupPhoto(actualGroup.photo);
        setMembersArr(actualGroup.membersId.length)
      }
    }
    return () => {
      groupStore.removeChangeListener(onChange);
    };
  }, [groups.length]);

  function onChange() {
    setGroups(groupStore.getGroups());
  }

  return (
    <div className="group-card__container">
      <div className="group-card__photo">
        <img src={actualGroupPhoto} alt="Photo" />
      </div>
      <div className="group-details__container">
        <div className="group-title">
          <h2>{actualGroupTitle}</h2>
        </div>
        <div className="details__info group-detail__info">
          <div className="details__left group-detail__left">
            <Link to={`/groups/${id}`} className="join-button">
              See More
            </Link>
          </div>
          <div className="details__right group-detail__right">
            <div className="info-participants group-members">
              <img
                src="https://www.flaticon.es/premium-icon/icons/svg/3249/3249789.svg"
                alt="participants-icon"
              />
              <p className="info-var">{membersArray}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupItem;
