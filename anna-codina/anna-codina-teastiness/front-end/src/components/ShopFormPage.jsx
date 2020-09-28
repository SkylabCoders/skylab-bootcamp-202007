import React, { useEffect, useState } from 'react';
import './FormPage.scss';
import { getUser } from '../actions/userActions';
import { updateShop, createShop, getShopList } from '../actions/shopActions';
import userStore from '../stores/userStore';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { getLocation } from '../actions/geocodeApiActions';
import shopStore from '../stores/shopStore';

function ShopFormPage(props) {
  const [shopList, setShopList] = useState(shopStore.getShopList());
  const [actualOwnShop, setActualOwnShop] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  const [mongoUser, setMongoUser] = useState();
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [schedule, setSchedule] = useState('');
  const [cif, setCif] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  useEffect(() => {
    userStore.addChangeListener(onChange);
    shopStore.addChangeListener(onChange);
    const shopId = props.match.params.shopId;
    if (isAuthenticated && !mongoUser) {
      getUser(user.email, user.sub);
    }
    if (mongoUser && mongoUser.type === 'user' && shopId !== 'newShop') {
      setActualOwnShop(userStore.getOwnShopById(shopId));
    }
    if (mongoUser && mongoUser.type === 'admin') {
      if (shopList.length === 0) {
        getShopList();
      } else {
        setActualOwnShop(shopStore.getShopById(shopId));
      }
    }
    if (actualOwnShop) {
      setName(actualOwnShop.name);
      setImg(actualOwnShop.img);
      setSchedule(actualOwnShop.schedule);
      setCif(actualOwnShop.cif);
      setStreet(actualOwnShop.address.street);
      setPostalCode(actualOwnShop.address.postalCode);
      setCity(actualOwnShop.address.city);
      setDescription(actualOwnShop.description);
    }

    return () => {
      userStore.removeChangeListener(onChange);
      shopStore.removeChangeListener(onChange);
    };
  }, [actualOwnShop, user, isAuthenticated, mongoUser, shopList]);

  function onChange() {
    setShopList(shopStore.getShopList());
    setMongoUser(userStore.getUser());
  }

  async function sendForm(event) {
    event.preventDefault();
    const newShopData = {
      ownerId: mongoUser._id,
      name: name.toLowerCase(),
      img,
      schedule,
      address: { street, city: city.toLowerCase(), postalCode: postalCode },
      description,
      cif
    };
    const newLocation = await getLocation(
      `${street}, ${city}, (${postalCode})`
    );
    newShopData.location = newLocation;
    if (!actualOwnShop) {
      await createShop(newShopData);
    } else {
      await updateShop(actualOwnShop._id, newShopData);
    }
    history.push('/profile');
  }

  return (
    <section className="flex-column">
      {!actualOwnShop && <h1>Crea tu tienda</h1>}
      {actualOwnShop && <h1>{actualOwnShop.name}</h1>}
      <form className="flex-column flex-row--inlarge">
        <div className="form--left flex-column">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label>url img:</label>
          <input
            type="url"
            value={img}
            onChange={(event) => setImg(event.target.value)}
          />
          <label>Horario:</label>
          <input
            type="text"
            value={schedule}
            onChange={(event) => setSchedule(event.target.value)}
            required
          />
          <label>CIF:</label>
          <input
            type="text"
            value={cif}
            maxLength="9"
            minLength="9"
            onChange={(event) => {
              setCif(event.target.value);
            }}
            required
          />
        </div>
        <div className="form--right flex-column">
          <label>dirección:</label>
          <span> calle:</span>
          <input
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            required
          />
          <span>ciudad:</span>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
          <span>código postal:</span>
          <input
            type="text"
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            required
            pattern="[0-9]"
            maxLength="5"
            minLength="5"
            title="Sólo números"
          />
          <label>Descripción:</label>
          <textarea
            rows="5"
            cols="50"
            maxLength="120"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
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
    </section>
  );
}
export default ShopFormPage;
