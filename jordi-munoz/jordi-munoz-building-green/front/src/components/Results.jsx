import React, { useEffect, useState } from 'react';
import './Results.scss';
import BarChart from './Chart';
import loc from '../img/localizacion.png';
import eco from '../img/ecosistemas.png';
import sispas from '../img/sispas.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import projectStore from '../stores/projectStore';
import { getScores } from '../actions/projectActions';
import LinearBuffer from './LinearBuffer';


function Results() {

  let project = JSON.parse(sessionStorage.project);
  const [scores, setScores] = useState([]);
  const [wait, setWait] = useState(false);

  let data = scores;
  const percentage = (data.reduce((a, b) => a + b, 0) / data.length).toFixed();

  function waiting() {
    setWait(false)

    setTimeout(() => {
      getScores(project.data._id);
      setWait(true)
    }, 4000);
  }

  useEffect(() => {
    projectStore.addChangeListener(onChange);
    if (!wait) {
      waiting();
    }
    return () => projectStore.removeChangeListener(onChange);

  }, [scores.length, wait]);

  function onChange() {
    setScores(projectStore.getScoresByCat());

  }


  return (

    <>
      {!wait && (
        <div style={{
          marginTop: "80px",
          marginBottom: "60px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "200px",
          paddingLeft: "10px",
          paddingRight: "10px"
        }}><h3>Calculando la sostenibilidad de su proyecto...</h3>
          <LinearBuffer />
        </div>
      )}
      {wait && (
        <div className="results-container">
          <BarChart data={data} />
          <div className="results-container__img">
            <h3>{`Resultados Proyecto: ${project.data.projectName}`}</h3>

            <CircularProgressbar className="results-container__circle" value={percentage} text={`${percentage}%`} />

            <div className="results-container__img-pics">
              <img src={loc} alt="Localización" />
              <img src={eco} alt="Ecosistemas" />
              <img src={sispas} alt="Sistemas Pasivos" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Results;