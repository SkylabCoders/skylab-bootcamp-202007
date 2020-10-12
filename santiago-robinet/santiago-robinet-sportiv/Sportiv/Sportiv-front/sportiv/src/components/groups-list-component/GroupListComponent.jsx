import React, { useState, useEffect } from "react";
import groupStore from '../../stores/GroupStore'
import { loadGroups } from "../../actions/GroupActions";
import './GroupListComponent.scss'
import GroupItem from '../group-item-component/GroupItemComponent'

function GroupsList() {
  const [groups, setGroups] = useState(groupStore.getGroups());

  useEffect(() => {
    groupStore.addChangeListener(onChange);
    if (groups.length === 0) loadGroups();
    return () => {
      groupStore.removeChangeListener(onChange);
    };
  }, [groups.length]);

  function onChange() {
    setGroups(groupStore.getGroups());
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
            {groups.map((group) => (
                <li key={group._id}>
                    <GroupItem id={group._id}/>
                </li>
            ))}
        </ul>
      </>
  )
}

export default GroupsList;
