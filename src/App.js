import React from "react";
import "./index.css";
import Flower from "./Flower";
import Data from "./data";
function App() {
  return (
    <>
      <h2>About Flower</h2>
      <Flower name={Data[0].name} img={Data[0].img} para={Data[0].p} />
      <Flower name={Data[1].name} img={Data[1].img} para={Data[1].p} />
      <Flower name={Data[2].name} img={Data[2].img} para={Data[2].p} />
      <Flower name={Data[3].name} img={Data[3].img} para={Data[3].p} />
    </>
  );
}

export default App;
