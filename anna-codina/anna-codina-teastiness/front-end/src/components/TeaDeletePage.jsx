import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { deleteTeaVarieties, getTeasVarieties } from '../actions/teaActions';
import { getUser } from '../actions/userActions';
import userStore from '../stores/userStore';
import Loading from './Loading';
import { useHistory } from 'react-router-dom';
import './ShopDeletePage.scss';
import teaStore from '../stores/teaStore';
function TeaDeletePage(props) {
  const { user, isAuthenticated } = useAuth0();
  const [teaList, setTeaList] = useState(teaStore.getVarietiesTeas());
  const [actualTea, setActualTea] = useState();
  const [mongoUser, setMongoUser] = useState(userStore.getUser());
  const history = useHistory();

  useEffect(() => {
    userStore.addChangeListener(onChange);
    teaStore.addChangeListener(onChange);
    const teaId = props.match.params.teaId;
    if (isAuthenticated && !mongoUser) {
      getUser(user.email, user.sub);
    }
    if (mongoUser && mongoUser.type === 'admin') {
      if (teaList.length === 0) {
        getTeasVarieties();
      } else {
        setActualTea(teaStore.getTeaVarietieId(teaId));
      }
    }
    return () => {
      userStore.removeChangeListener(onChange);
      teaStore.removeChangeListener(onChange);
    };
  }, [
    props.match.params.teaId,
    isAuthenticated,
    mongoUser,
    user?.email,
    user?.sub,
    teaList.length
  ]);

  function onChange() {
    setMongoUser(userStore.getUser());
    setTeaList(teaStore.getVarietiesTeas);
  }

  async function sendDeletePage(event) {
    event.preventDefault();
    await deleteTeaVarieties(actualTea._id);
    history.push('/');
  }
  return (
    <>
      {!actualTea && <Loading />}
      {actualTea && mongoUser.type === 'admin' && (
        <div className="flex-column shop-info">
          <h1>{actualTea.name}</h1>
          <p>{actualTea.description}</p>
          <p>
            <strong>tiempo:</strong> {actualTea.time}
          </p>
          <p>
            <strong>temperatura:</strong> {actualTea.temperature}
          </p>
          <p>
            <strong>tipo:</strong> {actualTea.type}
          </p>
          <button
            className="delete-button"
            to="/profile"
            onClick={(event) => {
              sendDeletePage(event);
            }}
          >
            {' '}
            Borrar{' '}
          </button>
        </div>
      )}
    </>
  );
}
export default TeaDeletePage;
