import planesData from "../data/info.json";
import { Card } from "./card";
import "../styles/main.css";
import useResponsive from './useResponsive';
export const HomeMain = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const planDescription = [
    "Ideal para un hogar",
    "Si necesitas trabajar desde casa",
    "Para hogares con mucho consumo o PyMES",
    "Empresas, industrias e instituciones",
  ];

  const tablet = {
    width: "-webkit-fill-available",
    flexDirection: "column"
  }
  const tabletCard = {
    width:"75%",
    height:"auto"
  }

  return (
    <>
      <main>
        <h2 className="rubik-h2">Nuestros planes</h2>
        <div id="planes"style={!isDesktop?tablet:{}}>
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
