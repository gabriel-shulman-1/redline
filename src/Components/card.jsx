import { useNavigate } from "react-router-dom";
import i1 from "../assets/iconos/casaMain.svg";
import i2 from "../assets/iconos/camaraMain.svg";
import i3 from "../assets/iconos/homeofficeMain.svg";
import i4 from "../assets/iconos/pcgamerMain.svg";
import i5 from "../assets/iconos/industriaMain.svg";
import "../styles/card.css";
import useResponsive from './useResponsive';
import { useState, useEffect } from "react";

export const Card = ({ tipo, pDescription, idx }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const imagenDescription = [i1, i2, i3, i4, i5];
  const [enter, setEnter] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true)
  const Navigate = useNavigate();

  
  const goToServices = (plan) => {
    Navigate("/PlanDetail/" + (plan.idx).toString());
  };
  
  useEffect(() => {
    let plan = [
      [i1, i2],
      [i3, i2, i1],
      [i4, i3, i2, i1],
      [i5, i4, i3, i2, i1],
    ];
    let index = plan[idx]
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === index.length - 1 ? 0 : prevIndex + 1);
      setLoading(false)
    }, 1000);

    return () => clearInterval(interval);}, );

  let tittle = { tipo }.tipo.id;
  let description = { pDescription }.pDescription;

  const tabletCard = {
    width:"75%",
    height:"auto"
  }


  if (loading) return <div className="loading" style={{color:"transparent"}}>Loading...</div>
  
  return (
    <>
      <div
        onClick={() => {
          goToServices({ idx });
        }}
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => setEnter(false)}
        className={"card c" + (idx).toString()}
        style={!isDesktop?tabletCard:{}}
      >
        <h2 className="rubik-h3">{tittle}</h2>
      {enter && isDesktop ? (
        <img src={imagenDescription[currentImageIndex]} alt={imagenDescription[currentImageIndex]}/>
      ) : (
        ""
      )}
        <p className="rubik-p5">{description}</p>
      </div>
    </>
  );
};
