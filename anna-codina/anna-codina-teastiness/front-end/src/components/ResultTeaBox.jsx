import React, { useState } from 'react';
import teaStore from '../stores/teaStore';
import { Link } from 'react-router-dom';
import './BodyBox.scss';

function ResultTeaBox({ _id }) {
  const [actualResult] = useState(teaStore.getResultById(_id));
  return (
    <>
      {actualResult && (
        <div className="body-box" key={actualResult._id + 'body-box'}>
          <>
            <h1>{actualResult.name}</h1>
            {actualResult.img && (
              <img alt={actualResult.name} src={actualResult.img}></img>
            )}
            <div className="body-box__hidden-content">
              <p>
                <strong>tipo:</strong>
                {actualResult.type}
              </p>
              <p>
                <strong>descripción:</strong>
                {actualResult.description}
              </p>
              <Link key={_id} to={`/tea/${_id}`}>
                saber más
              </Link>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default ResultTeaBox;
