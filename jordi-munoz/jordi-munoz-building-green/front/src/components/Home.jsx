import React from 'react';
import certifications from '../img/certifications.png';
import categories from '../img/categoriesList.png';
import logo from '../img/logo-bg.png';
import './Home.scss';


function Home() {

  return (
    <div style={{
      marginTop: "80px",
      marginBottom: "60px",
    }}>
      <div className="home-container">
        <img className="home-container__logo" src={logo} alt="Logo" />
        <p>Cada vez más las personas estamos más concienciados de la importancia de la sostenibilidad. Esta importancia se transmite en la elección de la ciudad y la vivienda donde queremos vivir.<br /><br />
        Los manuales de sostenibilidad son una herramienta para evaluar la sostenibilidad, la calidad de vida y la eficiencia energética de las viviendas. <br /><br />Desde Espai Energy, realizamos un manual de sostenibilidad acorde con las necesitades del cliente y cogiendo referencias de las principales certificaciones sostenibles globales, como LEED, BREEAM, WELL o PASSIVHAUS.
      </p>
        <img src={certifications} alt="Certificaciones" width="400px" />
        <p>Desde esta aplicación el usuario puede evaluar su edificio/promoción en el manual de sostenibilidad de su empresa.<br /><br />
        El manual está compuesto, tal como se puede ver en la siguiente imagen, por diversos créditos sostenibles clasificados en varias categorías de sostenibilidad.<br /><br />
        En función del cumplimiento de cada criterio se obtendrán puntos, al final de toda la evaluación se sumarán los puntos y se obtendrá una clasificación sostenible (&ge; 50 puntos edificio sostenible, &ge; 75 puntos edificio verde).
      </p>
        <img src={categories} alt="Categorias" />
      </div>
    </div>
  )
}

export default Home;