import React from "react";
import "./index.css";
import Flower from "./Flower";
import Data from "./data";
function App() {
  return (
    <>
      <h2>About Flower</h2>
      <Flower name={Data[0].name} img={Data[0].img} para={Data[0].p} />
      <Flower name={Data[0].name} img={Data[0].img} para={Data[0].p} />
      <Flower name={Data[0].name} img={Data[0].img} para={Data[0].p} />
      <Flower name={Data[0].name} img={Data[0].img} para={Data[0].p} />
    </>
  );
}

export default App;
