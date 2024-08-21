import planesData from "../data/info.json";
import React, { useContext, useState, useEffect } from "react";
import { planChose } from "../context/cnt1";
export const PlanDetail = () => {
  //const [information, setInformation] = useState(null);
  //const infoplan = localStorage.getItem("number");
  const { plan, setPlan } = useContext(planChose);
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
  };
  console.log(plan);
  const ShowData = (id) => {
    let tx, h3;
    for (let index = 0; index < planesData.plan.length; index++) {
      if (index === plan) {
        planesData.plan[id] = tx;
      }
    }
    for (let index = 0; index < planesData.description.length; index++) {
      if (index === plan) {
        h3 = planesData.description[id];
      }
    }
    return (
      <>
        <h3>tx</h3>
        <p>h3</p>
      </>
    );
  };
  console.log(ShowData(plan)[0]);

  return (
    <main style={planMain}>
      <button id="izq">&#10094;</button>
      <div className="descriptionContainer">
        <div className="txDescription">
          <ShowData/>
        </div>
      </div>
      <button id="der">&#10095;</button>
    </main>
  );
};
