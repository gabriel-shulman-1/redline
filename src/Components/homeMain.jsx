import planesData from "../data/info.json";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState , useEffect} from "react";
import { planChose } from "../context/cnt1";
export const HomeMain = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const {plan,setPlan}=useContext(planChose)
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
  console.log(plan)

  return (
    <>
      <main>
        <h2 className="rubik-h2">Nuestros planes</h2>
        <div id="planes">
          {planesData.plan.map((plan, index) => (
            <li
              className={"plan " + "plan" + (index + 1)}
              key={index}
              onMouseEnter={() => setPlan(index)}
              onClick={() => {goToServices(hoveredIndex)}}>
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
