import React from "react";
import "./index.css";
function Flower(props) {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="card">
          <h3>{props.name}</h3>
          <img src={props.img} alt="Error" />
          <p>{props.para}</p>
          <button>Read more</button>
        </div>
      </div>
    </>
  );
}
export default Flower;
