import { useNavigate } from "react-router-dom";
import i1 from "../assets/iconos/casaMain.svg";
import i2 from "../assets/iconos/camaraMain.svg";
import i3 from "../assets/iconos/homeofficeMain.svg";
import i4 from "../assets/iconos/pcgamerMain.svg";
import i5 from "../assets/iconos/industriaMain.svg";
import "../styles/card.css";
import { useState, useEffect } from "react";
export const Card = ({ tipo, pDescription, idx }) => {
  const imagenDescription = [i1, i2, i3, i4, i5];
  const [enter, setEnter] = useState(false);
  const [tipoplan, setTipoplan] = useState()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Navigate = useNavigate();
  const goToServices = (num) => {
    Navigate("/PlanDetail");
  };

  let plan = [[i1, i2],[i3, i2, i1],[i4, i3, i2, i1],[i5, i4, i3, i2, i1]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === plan[idx].length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Cambiar cada segundo

    return () => clearInterval(interval);
  }, [imagenDescription.length]);
  let tittle = { tipo }.tipo.id;
  let description = { pDescription }.pDescription;

  return (
    <>
      <div
        onClick={() => goToServices()}
        onMouseEnter={() => (setEnter(true),setTipoplan(idx))}
        onMouseLeave={() => (setEnter(false),setTipoplan(idx))}
        className={"card " + "c" + (idx + 1).toString()}
      >
        <h2 className="rubik-h3">{tittle}</h2>
        {<img src={imagenDescription[currentImageIndex]} alt="" />
        /*enter === true ? (<img src={imagenDescription[currentImageIndex]} alt="" />) : ("")*/}
        <p className="rubik-p5">{description}</p>
      </div>
    </>
  );
};
