import planesData from "../data/info.json";
import React, { useContext, useState, useEffect } from "react";
import { planChose } from "../context/cnt1";
export const PlanDetail = () => {
  const { plan, setPlan } = useContext(planChose);
  //const [information, setInformation] = useState(null);
  //const infoplan = localStorage.getItem("number");
  /*
  const [number, setNumber] = useState(() => {
    const savedNumber = localStorage.getItem('number');
    return savedNumber !== null ? JSON.parse(savedNumber) : 0;
    });
  const tittle = planesData.plan[plan].id;
  const description = planesData.description[plan];
  setInformation([tittle, description]);*/

  const planMain = {
    display: "flex",
    flexDirection: "row",
    position: "static",
    backgroundImage:
      "linear-gradient(to right, #2c2c2c 0%, black 100%, #505050 0%)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2rem",
    height: "660px"
  };
  console.log(plan);
  const ShowData = (id) => {
    let tx = planesData.plan[id].id
    let h3 = planesData.description[id].id
    console.log(tx,h3)
    return (
      <>
        <h3>{tx}</h3>
        <p>{h3}</p>
      </>
    );
  };

  return (
    <main style={planMain}>
      <button className="slider">&#10094;</button>
      <div className="descriptionContainer">
        <div className="txDescription">
          {ShowData(plan)}
        </div>
      </div>
      <button className="slider">&#10095;</button>
    </main>
  );
};
