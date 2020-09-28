import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeasVarietiesSearch } from '../actions/teaActions';
import { getShopsSearch } from '../actions/shopActions';
import { getUser } from '../actions/userActions';
import { useAuth0 } from '@auth0/auth0-react';
import teaStore from '../stores/teaStore';
import shopStore from '../stores/shopStore';
import userStore from '../stores/userStore';
import ResultTeaBox from './ResultTeaBox';
import ResultShopBox from './ResultShopBox';
import './SearchPage.scss';

function SearchPage() {
  const { user, isAuthenticated } = useAuth0();
  const [mongoUser, setMongoUser] = useState();
  const [collection, setCollection] = useState('tea');
  const [queryType, setQueryType] = useState('name');
  const [search, setSearch] = useState('');
  const [searchCheck, setSearchCkeck] = useState(false);
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    teaStore.addChangeListener(onChange);
    shopStore.addChangeListener(onChange);
    userStore.addChangeListener(onChange);
    if (isAuthenticated && !mongoUser) {
      getUser(user.email, user.sub);
    }
    return () => {
      teaStore.removeChangeListener(onChange);
      shopStore.removeChangeListener(onChange);
      userStore.removeChangeListener(onChange);
    };
  }, [searchCheck, searchResult, collection, mongoUser, user, isAuthenticated]);

  function onChange() {
    if (collection === 'tea') {
      setSearchResult(teaStore.getSearchResults());
    }
    if (collection === 'shop') {
      setSearchResult(shopStore.getSearchResults());
    }
    setMongoUser(userStore.getUser());
  }

  function sendSearch(event) {
    event.preventDefault();
    if (collection === 'tea') {
      getTeasVarietiesSearch(queryType, search.toLowerCase());
    }
    if (collection === 'shop') {
      getShopsSearch(queryType, search.toLowerCase());
    }
    setSearchCkeck(true);
  }
  return (
    <section className="flex-column ">
      <h1>Realiza tu busqueda</h1>
      <form className="flex-column flex-row--inlarge">
        <select
          required
          className="flex-row"
          name="types"
          onChange={(event) => {
            setQueryType('name');
            setCollection(event.target.value);
          }}
        >
          <option value="tea">Variedades de té</option>
          <option value="shop">Tiendas</option>
        </select>
        <select
          required
          className="flex-row"
          name="subtypes"
          onChange={(event) => setQueryType(event.target.value)}
        >
          <option value="name">Nombre</option>
          {collection === 'tea' && (
            <>
              <option value="type">Tipo</option>
              <option value="benefits">Beneficios</option>
            </>
          )}
          {collection === 'shop' && (
            <>
              <option value="city">Ciudad</option>
            </>
          )}
        </select>
        <div className="flex-row search-bar">
          <input
            className="flex-row"
            type="search"
            name="search"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            type="submit"
            onClick={(event) => {
              sendSearch(event);
            }}
          />
        </div>
      </form>
      <div>
        {searchCheck && searchResult.length === 0 && (
          <h2>Tu búsqueda no ha obtenido ningún resultado</h2>
        )}
        {searchCheck && searchResult && searchResult.length > 0 && (
          <section className="flex-column flex-row--inlarge results-section">
            {collection === 'tea' && (
              <>
                {searchResult.map((result) => {
                  return <ResultTeaBox key={result._id} _id={result._id} />;
                })}
              </>
            )}
            {collection === 'shop' && (
              <>
                {searchResult.map((result) => {
                  return <ResultShopBox key={result._id} _id={result._id} />;
                })}
              </>
            )}
          </section>
        )}
      </div>
      {mongoUser &&
        ((searchCheck && mongoUser.owner.length > 0) ||
          mongoUser.type === 'admin') && (
          <Link className="new-product" to="/teaform/newtea">
            Añadir producto
          </Link>
        )}
    </section>
  );
}

export default SearchPage;
