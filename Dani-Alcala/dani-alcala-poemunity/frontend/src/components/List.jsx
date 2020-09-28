import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadPoems,
  deletePoem,
  likePoem,
  sortByCriteria,
} from "../actions/poemActions";
import poemStore from "../stores/poemStore";
import "./List.scss";
import "./Detail.scss";
import "../App.scss";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "./CircularIndeterminate";


function List(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const genre = props.match.params.genre;
  const [poems, setPoems] = useState(poemStore.getPoems(genre));
  const [sort, setSort] = useState("Likes");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    poemStore.addChangeListener(onChange);
    if (poems.length === 0) loadPoems();
    else {
      onChange();
    }
    return () => poemStore.removeChangeListener(onChange);
  }, [poems.length, genre, sort]);

  function onChange() {
    setPoems(poemStore.getPoems(genre));
  }

  function onDelete(event, poemId) {
    event.preventDefault();
    deletePoem(poemId);
  }

  function onLike(event, poemId, userId) {
    event.preventDefault();
    likePoem(poemId, userId);
  }

  const LIKE = "Like";
  const LIKES = "Likes";
  const READ_MORE = "Leer más";
  const ADMIN = "google-oauth2|102774395820207939159";

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  function onFieldChange(value, setValue) {
    setValue(value);
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="list__container">
        <div className="list__intro">
          {!genre && (
            <p className="list__presentation">¡Tu red social de poesía!</p>
          )}
          {genre && (
            <p className="list__presentation">
              Categoría: {genre.toUpperCase()}
            </p>
          )}
          <div className="separator"></div>
          <form className="list__sort">
            <label>
              {`Ordenar poemas por: `}
              <select
                type="submit"
                id="sort"
                name="sort"
                onChange={(event) => {
                  onFieldChange(event.target.value, setSort);
                  sortByCriteria(event.target.value);
                }}
              >
                <option value="likes">Likes</option>
                <option value="fecha">Fecha</option>
                <option value="aleatorio">Aleatorio</option>
                <option value="titulo">Título</option>
              </select>
            </label>
          </form>
          <div className="list__search">
            <SearchIcon style={{ fontSize: 40, fill: "#4F5D73" }} />
            <TextField
              label="Buscar autor"
              InputLabelProps={{
                style: { color: "#4F5D73" },
              }}
              InputProps={{
                style: { color: "#4F5D73" },
              }}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {poems.map((poem) => (
          <main key={poem._id} className="poem__detail">
            {poem.author.includes(filter) && (
              <section className="poem__block">
                <section>
                  <Link to={`/detalle/${poem._id}`} className="poem__title">
                    {poem.title}
                  </Link>
                  <div className="poem__author-container">
                  <img className="poem__picture" src={poem.picture} />
                  <p className="poem__author">{poem.author}</p>
                  </div>
                  <div className="poem__date">{poem.date}</div>
                </section>
                <section>
                  <div className="poem__content poems__content">
                    {poem.poem}
                  </div>
                  <div className="poems__read-more">
                    <Link
                      to={`/detalle/${poem._id}`}
                      className="poems__read-more"
                    >
                      {READ_MORE}
                    </Link>
                  </div>
                </section>
                <section className="poem__footer">
                  {poem.likes.length === 1 && (
                    <div className="poem__likes">
                      {poem.likes.length} {LIKE}
                    </div>
                  )}
                  {poem.likes.length !== 1 && (
                    <div className="poem__likes">
                      {poem.likes.length} {LIKES}
                    </div>
                  )}
                  <div className="separator"></div>
                  {isAuthenticated &&
                    poem.author !== user.name &&
                    poem.likes.some((id) => id === user.sub) && (
                      <Link
                        className="poem__likes-icon"
                        onClick={(event) => onLike(event, poem._id, user.sub)}
                      ></Link>
                    )}
                  {isAuthenticated &&
                    poem.author !== user.name &&
                    !poem.likes.some((id) => id === user.sub) && (
                      <Link
                        className="poem__unlikes-icon"
                        onClick={(event) => onLike(event, poem._id, user.sub)}
                      ></Link>
                    )}
                  {isAuthenticated &&
                    (poem.author === user.name || user.sub === ADMIN) && (
                      <HighlightOffSharpIcon
                        className="poem__delete-icon"
                        style={{ fill: "red" }}
                        onClick={(event) => onDelete(event, poem._id)}
                      />
                    )}
                  <Link
                    to={`/detalle/${poem._id}`}
                    className="poem__comments-icon"
                  >
                    <SubjectSharpIcon style={{ fill: "#000" }} />
                  </Link>
                </section>
              </section>
            )}
          </main>
        ))}
      </div>
    </>
  );
}
export default List;
