import React from "react";
import "./List.scss";
import "./Detail.scss";
import "../App.scss";
import "./Dashboard.scss";
import Accordion from "./SimpleAccordion";
import Ranking from "./Ranking";
import List from "./List";


function Dashboard(props) {
  return (
    <main className="dashboard">
      <div className="dashboard__accordion">
      <Accordion />
      </div>
      <div className="dashboard__list">
      <List {...props}/>
      </div>
      <div className="dashboard__ranking">
      <Ranking />
      </div>
    </main>
  );
}
export default Dashboard;
