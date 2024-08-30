import planesData from "../data/info.json";
import "../styles/planDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i1 from "../assets/iconos/casaMain.svg";
import i2 from "../assets/iconos/camaraMain.svg";
import i3 from "../assets/iconos/homeofficeMain.svg";
import i4 from "../assets/iconos/pcgamerMain.svg";
import i5 from "../assets/iconos/industriaMain.svg";

export const PlanDetail = () => {
  const imagenDescription = [i1, i2, i3, i4, i5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const Navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ShowData = () => {
    const { Id } = useParams();
    ShowImg(Id)
    let tittle = { planesData }.planesData.plan[{ Id }.Id].id;
    let text = { planesData }.planesData.description[{ Id }.Id].id;
    return (
      <>
        <h1 className="rubik-h1">Plan {tittle}</h1>
        <p className="rubik-p5">{text}</p>
      </>
    );
  };

  const ShowImg = (id) => {
    useEffect(() => {
      let plan = [
        [i1, i2],
        [i3, i2, i1],
        [i4, i3, i2, i1],
        [i5, i4, i3, i2, i1],
      ];
      let index = plan[id]
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === index.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(interval);
    });
  };

  const handlePrev = () => {
    let back = [4, 3, 2, 1];
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? back.length - 1 : prevIndex - 1
    );
    Navigate("/PlanDetail/" + currentIndex.toString());
  };

  const handleNext = () => {
    let go = [1, 2, 3, 4];
    setCurrentIndex((prevIndex) =>
      prevIndex === go.length - 1 ? 0 : prevIndex + 1
    );
    Navigate("/PlanDetail/" + currentIndex.toString());
  };

  return (
    <main id="planDetail">
      <button
        className="slider izq"
        onClick={() => {
          handlePrev();
        }}
      >
        <span>&#10094;</span>
      </button>

      <div className="descriptionContainer">
        <div className="txDescription">
          <ShowData />
        </div>
        <img src={imagenDescription[currentImageIndex]} alt="" style={{width:"280px"}}/>
      </div>
      <button
        className="slider der"
        onClick={() => {
          handleNext();
        }}
      >
        <span>&#10095;</span>
      </button>
    </main>
  );
};
