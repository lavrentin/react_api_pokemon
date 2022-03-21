import React from "react";
import Character1 from "../HomeCard/Character1";
import "../component/Card.css";
import Character2 from "../HomeCard/Character2";
import Character3 from "../HomeCard/Character3";

function HomePage() {
  return (
    <div className="HomePage">
      <Character1 />
      <Character2 />
      <Character3 />
    </div>
  );
}

export default HomePage;
