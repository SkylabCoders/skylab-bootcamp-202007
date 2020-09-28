import React, { useEffect, useState } from 'react';
import { getUser } from '../actions/userActions';
import { useAuth0 } from '@auth0/auth0-react';
import './FormPage.scss';
import userStore from '../stores/userStore';
import teaStore from '../stores/teaStore';
import {
  getTeasVarieties,
  createTeaVar,
  updateTeaVar
} from '../actions/teaActions';
import { useHistory } from 'react-router-dom';
function TeaFormPage(props) {
  const [mongoUser, setMongoUser] = useState();
  const { user, isAuthenticated } = useAuth0();
  const [teaList, setTeaList] = useState(teaStore.getVarietiesTeas());
  const [actualTea, setActualTea] = useState(null);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [type, setType] = useState('negro');
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [benefitOne, setBenefitOne] = useState('');
  const [benefitTwo, setBenefitTwo] = useState('');
  const [benefitThree, setBenefitThree] = useState('');
  const history = useHistory();

  useEffect(() => {
    userStore.addChangeListener(onChange);
    teaStore.addChangeListener(onChange);
    const teaId = props.match.params.teaId;
    if (isAuthenticated && !mongoUser) {
      getUser(user.email, user.sub);
    }
    if (teaList.length === 0) {
      getTeasVarieties();
    }
    if (teaId !== 'newShop' && teaList.length > 0) {
      setActualTea(teaStore.getTeaVarietieId(teaId));
    }
    if (actualTea) {
      setName(actualTea.name);
      setImg(actualTea.img);
      setTime(actualTea.time);
      setTemperature(actualTea.temperature);
      setType(actualTea.type);
      setDescription(actualTea.description);
      setBenefitOne(actualTea.benefits[0]);
      setBenefitTwo(actualTea.benefits[1]);
      setBenefitThree(actualTea.benefits[2]);
    }
    return () => {
      userStore.removeChangeListener(onChange);
      teaStore.removeChangeListener(onChange);
    };
  }, [actualTea, user, isAuthenticated, mongoUser]);

  function onChange() {
    setMongoUser(userStore.getUser());
    setTeaList(teaStore.getVarietiesTeas());
  }
  async function sendForm(event) {
    event.preventDefault();
    const newTeaData = {
      name: name.toLowerCase(),
      img,
      time,
      temperature,
      type,
      description,
      benefits: [
        benefitOne.toLowerCase(),
        benefitTwo.toLowerCase(),
        benefitThree.toLowerCase()
      ]
    };
    if (!actualTea) {
      await createTeaVar(newTeaData);
    } else if (mongoUser.type === 'admin') {
      await updateTeaVar(actualTea._id, newTeaData);
    }
    history.push('/search');
  }

  return (
    <section className="flex-column">
      {mongoUser && (mongoUser.type === 'admin' || mongoUser.owner.length > 0) && (
        <>
          {!actualTea && <h1>Crear nuevo tipo de té</h1>}
          {actualTea && <h1>{actualTea.name}</h1>}
          <form className="flex-column flex-row--inlarge">
            <div className="form--left flex-column">
              <label htmlFor="name">Nombre:</label>
              <input
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <label htmlFor="img">url img:</label>
              <input
                name="img"
                type="url"
                value={img}
                onChange={(event) => setImg(event.target.value)}
              />
              <label htmlFor="time">tiempo de cocción:</label>
              <input
                name="time"
                type="text"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                required
              />
              <label htmlFor="temperature">temperatura de cocción en ºC:</label>
              <input
                name="temperature"
                type="text"
                value={temperature}
                onChange={(event) => setTemperature(event.target.value)}
                required
              />
              <label htmlFor="types">tipo de té:</label>
              <select
                required
                name="types"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="negro">Negro</option>
                <option value="verde">Verde</option>
                <option value="blanco">Blanco</option>
                <option value="tisana">Tisana</option>
                <option value="oolong">Oolong</option>
                <option value="rooibos">Rooibos</option>
              </select>
            </div>
            <div className="form--right flex-column">
              <label htmlFor="description">Descripción:</label>
              <textarea
                required
                name="description"
                rows="10"
                cols="50"
                maxLength="120"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <label htmlFor="benefits">beneficios:</label>
              <div className="flex-column">
                {' '}
                <input
                  required
                  name="benefits"
                  value={benefitOne}
                  onChange={(event) => {
                    setBenefitOne(event.target.value);
                  }}
                ></input>
                <input
                  name="benefits"
                  value={benefitTwo}
                  onChange={(event) => {
                    setBenefitTwo(event.target.value);
                  }}
                ></input>
                <input
                  name="benefits"
                  value={benefitThree}
                  onChange={(event) => {
                    setBenefitThree(event.target.value);
                  }}
                ></input>
              </div>
              <button
                type="submit"
                onClick={(event) => {
                  sendForm(event);
                }}
              >
                ENVIAR
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
export default TeaFormPage;
