import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import poemStore from "../stores/poemStore";
import { loadPoem, deletePoem, likePoem } from "../actions/poemActions";
import "./Detail.scss";
import "../App.scss";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import SubjectSharpIcon from "@material-ui/icons/SubjectSharp";
import { useAuth0 } from "@auth0/auth0-react";
import Disqus from "disqus-react";
import CircularProgress from "./CircularIndeterminate";
import "./PageNotFound.scss";


function Detail(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [poem, setPoem] = useState(
    poemStore.getPoem(props.match.params.poemId)
  );

  useEffect(() => {
    poemStore.addChangeListener(onChange);

    if (!poem) {
      loadPoem(props.match.params.poemId);
    }

    return () => {
      poemStore.removeChangeListener(onChange);
    };
  }, [poem]);

  function onChange() {
    setPoem(poemStore.getPoem());
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
  const ADMIN = "google-oauth2|102774395820207939159";

  if (isLoading) {
    return <CircularProgress />;
  }

  const disqusShortname = "poemunity";
  const disqusConfig = {
    url: `http://localhost:3000/detalle/${props.match.params.poemId}`,
    identifier: `http://localhost:3000/detalle/${props.match.params.poemId}`,
    title: "Title of Your Article",
  };

  return (
    <>
      {!poem && (
        <main className="page-not-found__container">
          <section className="page-not-found__message">
            <h1 className="page-not-found__title">Error - 404</h1>
            <p className="page-not-found__text">Nothing to see here</p>
            <Link className="page-not-found__link" to="/">
              Back to Dashboard
            </Link>
          </section>
        </main>
      )}
      {poem && poem.likes && (
        <main className="poem__detail">
          <section className="poem__block">
            <section>
              <h2 className="poem__title">{poem.title}</h2>
              <div className="poem__author-container">
                <img className="poem__picture" src={poem.picture} />
                <p className="poem__author">{poem.author}</p>
              </div>
              <div className="poem__date">{poem.date}</div>
            </section>
            <section>
              <div className="poem__content">{poem.poem}</div>
            </section>
            <br></br>
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
              <Link to={`/detalle/${poem._id}`} className="poem__comments-icon">
                <SubjectSharpIcon style={{ fill: "#000" }} />
              </Link>
            </section>
          </section>
          <div className="article-container">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </main>
      )}
    </>
  );
}

export default Detail;
