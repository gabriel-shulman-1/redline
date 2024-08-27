import planesData from "../data/info.json";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { planChose } from "../context/cnt1";
import "../styles/main.css";
import i1 from "../assets/casaMain.png";
import i2 from "../assets/camaraMain.png";
import i3 from "../assets/homeofficeMain.png";
import i4 from "../assets/industriaMain.png";
import i5 from "../assets/pcgamerMain.png";
export const HomeMain = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const { plan, setPlan } = useContext(planChose);
  const [sp, setSp] = useState(false);
  const navigate = useNavigate();
  /*useEffect(() => {
    localStorage.setItem('number', JSON.stringify(hoveredIndex));
  }, [hoveredIndex]);*/

  /*const fijarPlan = (num) => {
    localStorage.setItem('number', JSON.stringify(num));
  }*/
  const goToServices = (num) => {
    navigate("/PlanDetail");
  };
  console.log(plan);

  const planDescription = [
    "Ideal para un hogar",
    "si necesitas trabajar desde casa",
    "para hogares con mucho consumo o PyMES",
    "Empresas, industrias e instituciones",
  ];
  const imagenDescription = [i1, i2, i3, i4, i5];

  const Descripcion = (n) => {
    console.log({ n }.n);
    if (sp === true) {
      return (
        <div className="description">
          <p>{planDescription[n.value]}</p>
          <img src={imagenDescription[n.value]} alt="" />
        </div>
      );
    }
  };

  return (
    <>
      <main>
        <h2 className="rubik-h2">Nuestros planes</h2>
        <div id="planes">
          {planesData.plan.map((plan, index) => (
            <li
              className={"plan " + "plan" + (index + 1)}
              key={index}
              onMouseEnter={() => (setPlan(index), setSp(true))}
              onMouseLeave={()=> setSp(false)}
              onClick={() => {
                goToServices(hoveredIndex);
              }}
            >
              <h3 className="planH3" key={"h" + index}>
                {plan.id}
              </h3>
              
            </li>
          ))}
        </div>
      </main>
    </>
  );
};
