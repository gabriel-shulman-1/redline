import planesData from "../data/info.json";
//import { useNavigate } from "react-router-dom";
//import React, { useContext, useState } from "react";
import { Card } from "./card";
import "../styles/main.css";

export const HomeMain = () => {
  //const navigate = useNavigate();

  /*useEffect(() => {
    localStorage.setItem('number', JSON.stringify(hoveredIndex));
  }, [hoveredIndex]);*/

  /*const fijarPlan = (num) => {
    localStorage.setItem('number', JSON.stringify(num));
  }*/

  /*const goToServices = (num) => {
    navigate("/PlanDetail");
  };*/

  const planDescription = [
    "Ideal para un hogar",
    "si necesitas trabajar desde casa",
    "para hogares con mucho consumo o PyMES",
    "Empresas, industrias e instituciones",
  ];

  return (
    <>
      <main>
        <h2 className="rubik-h2">Nuestros planes</h2>
        <div id="planes">
          {planesData.plan.map((plan, index) => (
            <Card tipo={plan} pDescription={planDescription[index]} key={index} idx={index}/>
            /*<li
              className={"plan " + "plan" + (index + 1)}
              key={index}
              onMouseEnter={() => (setPlan(index), setSp(true))}
              onMouseLeave={()=> setSp(false)}
              onClick={() => {
                goToServices(hoveredIndex);
              }}*
            >
              <h3 className="planH3" key={"h" + index}>
                {plan.id}
              </h3>
              
            </li>*/
          ))}
        </div>
      </main>
    </>
  );
};
