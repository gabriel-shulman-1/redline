import planesData from "../data/info.json";
import { Card } from "./card";
import "../styles/main.css";
export const HomeMain = () => {

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
