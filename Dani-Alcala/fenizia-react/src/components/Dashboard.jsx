import React from "react";
import Slider from "./Slider";
import Cover from './Cover'


function Dashboard() {
  return (
    <>
        <Cover />
        <Slider order="novedades" url="/novedades" text="NOVEDADES" />
        <Slider order="superventas" url="/superventas" text="SUPERVENTAS" />
    </>
  );
}

export default Dashboard;
