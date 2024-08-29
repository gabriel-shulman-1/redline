import planesData from "../data/info.json";
//import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import React, { useContext, useState } from "react";
import { Card } from "./card";
import "../styles/main.css";

export const HomeMain = () => {
  //const { id } = useParams();
  //const navigate = useNavigate();
  /*useEffect(() => {
    localStorage.setItem('number', JSON.stringify(hoveredIndex));
  }, [hoveredIndex]);*/
  /*const fijarPlan = (num) => {
    localStorage.setItem('number', JSON.stringify(num));
  }*/
 
  const planDescription = [
    "Ideal para un hogar",
    "Si necesitas trabajar desde casa",
    "Para hogares con mucho consumo o PyMES",
    "Empresas, industrias e instituciones",
  ];

  return (
    <>
      <main>
        <h2 className="rubik-h2">Nuestros planes</h2>
        <div id="planes">
          {planesData.plan.map((plan, index) => (
            <Card
              tipo={plan}
              pDescription={planDescription[index]}
              key={index}
              idx={index}
            />
          ))}
        </div>
      </main>
    </>
  );
};
