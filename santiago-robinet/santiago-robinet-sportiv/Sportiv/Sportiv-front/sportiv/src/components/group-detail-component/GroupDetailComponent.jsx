import React from "react";
import { useState, useEffect } from "react";
import "./GroupDetailComponent.scss";
import { loadGroups, memberJoin } from "../../actions/GroupActions";
import groupStore from "../../stores/GroupStore";
import { useAuth0 } from "@auth0/auth0-react";
import userStore from "../../stores/UserStore";
import { loadUser } from "../../actions/userActions";

function GroupDetail(props) {
  const { user, isAuthenticated } = useAuth0();

  const [mongoUser, setMongoUser] = useState(userStore.getUser());
  const [groups, setGroups] = useState(groupStore.getGroups());
  const [groupId, setGroupId] = useState(props.match?.params?.groupId);
  const [groupTitle, setGroupTitle] = useState("");
  const [groupPhoto, setGroupPhoto] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupCategory, setGroupCategory] = useState("");
  const [isMember, setMember] = useState(null);
  const [membersArray, setMembersArr] = useState([]);

  useEffect(() => {
    groupStore.addChangeListener(onChange);
    if (groups.length === 0) {
      (async function loadAllGroups() {
        await loadGroups();
      })();
    } else if (groupId) {
      const group = groupStore.getGroupById(groupId);

      if (group) {
        setGroupId(group._id);
        setGroupTitle(group.title);
        setGroupPhoto(group.photo);
        setGroupDescription(group.description);
        setGroupCategory(group.category);
        setMembersArr(group.membersId.length);
        (async function userLoading() {
          await loadUser(user?.sub);
          setMongoUser(userStore.getUser());
          const toogleButton = mongoUser?.groups.some((item) => {
            return item === groupId;
          });
          setMember(toogleButton);
        })();
      }
    }
    return () => groupStore.removeChangeListener(onChange);
  }, [groups]);
  

  function onChange() {
    setGroups(groupStore.getGroups());
  }

  function onSubmit(groupId, user){
    (async function userLoading() {
      await loadUser(user?.sub);
      setMongoUser(userStore.getUser());
      const toogleButton = mongoUser?.groups.some((item) => {
        return item === groupId;
      });
      setMember(toogleButton);
      memberJoin(groupId, user)
    })();

  }

  return (
    <>
      <div className="banner__container">
        <img
          src="https://secure.meetupstatic.com/photos/event/7/7/c/5/highres_491130661.jpeg"
          alt=""
        />
        <div className="banner__container-title">
          <h1>{groupCategory.toLocaleUpperCase()}</h1>
        </div>
      </div>
      <div className="group-detail__container">
        <div className="group-header__container">
          <div className="group-title">
            <h2>{groupTitle}</h2>
          </div>
          <img src={groupPhoto} alt="group-photo" />
        </div>
        <div className="group-info__container">
          <div className="group-description">
            <h3 className="group-description-title">Description</h3>
            <h4>{groupDescription}</h4>
          </div>
          <div>
            <div className="group-inscription">
              {!isAuthenticated && (
                <h4>You Need to Login if you want to join the group..</h4>
              )}
              {isAuthenticated && !isMember && (
                <div className="joinus-button__container">
                  <button
                    className="inscription__button"
                    onClick={() => memberJoin(groupId, user)}
                  >
                    Join us!
                  </button>
                </div>
              )}
              {isAuthenticated && isMember && (
                <div className="joinus-button__container">
                  <button
                    className="inscription__button"
                    onClick={() => memberJoin(groupId, user)}
                  >
                    Leave NOW!
                  </button>
                </div>
              )}
              <div className="group-members">
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
    </>
  );
}

export default GroupDetail;
