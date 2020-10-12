import React, { useState } from 'react';
import teaStore from '../stores/teaStore';
import { Link } from 'react-router-dom';
import './BodyBox.scss';

function BodyBoxPrincipalTea({ _id }) {
  const [actualPrincipalTea] = useState(teaStore.getPrincipalTeasById(_id));
  return (
    <>
      {actualPrincipalTea && (
        <div className="body-box" key={actualPrincipalTea._id + 'body-box'}>
          <>
            <h1>{actualPrincipalTea.type}</h1>
            <img
              alt={actualPrincipalTea.type}
              src={actualPrincipalTea.img}
            ></img>
            <div className="body-box__hidden-content">
              <p>
                <strong>oxidación:</strong>
                {actualPrincipalTea.oxidizedLevel}
              </p>
              <p>
                <strong>teína:</strong>
                {actualPrincipalTea.theine}
              </p>
              <p>
                <strong>tipo de sabor:</strong>
                {actualPrincipalTea.flavorType}
              </p>
              <p>
                <strong>Más populares:</strong>
                {actualPrincipalTea.varieties.map((tea) => {
                  return (
                    <Link key={tea._id} to={`/tea/${tea._id}`}>
                      {tea.name}
                    </Link>
                  );
                })}
              </p>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default BodyBoxPrincipalTea;
