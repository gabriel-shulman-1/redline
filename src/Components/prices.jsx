import React, { useState } from "react";
import "../styles/prices.css";
import { MapPicker } from "./mapPicker";
import data from "../data/info.json";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import wps from "../assets/wps.svg";
import mail from "../assets/mail.svg";

export const Prices = () => {
  const [msn1, setMsn1] = useState("");
  const [msn2, setMsn2] = useState("");
  const [msn3, setMsn3] = useState("");
  const [msn4, setMsn4] = useState("");
  const [msn5, setMsn5] = useState("");
  const [msn6, setMsn6] = useState("");
  const [msn7, setMsn7] = useState("");
  const [gps, setGps] = useState("");
  const [method, setMethod] = useState("whatsapp");
  const [selectedItems, setSelectedItems] = useState([]);
  const Navigate = useNavigate();

  const handleSend = () => {
    let intro =
      "nombre y apellido :" +
      msn1 +
      msn2 +
      ". DNI: " +
      msn3 +
      ". CUIL: " +
      msn4 +
      ". Dirección: " +
      msn5 +
      ". Altura: " +
      msn6;
    let intro5 = "Detalles: " + msn7 + ". Planes solicitados: ";

    for (
      let index = 0;
      index < { selectedItems }.selectedItems.length;
      index++
    ) {
      intro5 =
        intro5 + { selectedItems }.selectedItems[index].id.toString() + " ";
    }

    if (method === "whatsapp") {
      const whatsappUrl = `https://wa.me/+5491126890280?text=${encodeURIComponent(
        intro +
          ". Planes solicitados: " +
          intro5 +
          ". Coordenadas: " +
          " Y=" +
          gps[0] +
          " X=" +
          gps[1]
      )}`;
      Navigate("/notify/" + msn1);
      window.open(whatsappUrl, "_blank");
    } else if (method === "email") {
      console.log(intro5);
      const emailUrl =
        "mailto:someone@example.com?subject=Nuevo cliente " +
        { msn1 }.msn1 +
        "&body=" +
        intro +
        ". Ubicación: Y " +
        gps[0] +
        " X " +
        gps[1] +
        ". Planes solicitados: " +
        intro5;
      Navigate("/notify/" + msn1);
      window.open(emailUrl, "_self");
    }
  };

  const handleLocationSelect = (position) => {
    setGps(position);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };


  return (
    <main id="mainPrices">
      <h1 className="rubik-h1">Cotiza tu conexión</h1>

      <div className="pricesDiv">
        <label>
          <p className="rubik-p5">Introduzca sus datos:</p>
        </label>

        <div className="areaCont">
          <textarea
            value={msn1}
            onChange={(e) => setMsn1(e.target.value)}
            placeholder="Nombre"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />

          <textarea
            value={msn2}
            onChange={(e) => setMsn2(e.target.value)}
            placeholder="Apellido"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />
        </div>
        <div className="areaCont">
          <textarea
            value={msn3}
            onChange={(e) => setMsn3(e.target.value)}
            placeholder="DNI"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />

          <textarea
            value={msn4}
            onChange={(e) => setMsn4(e.target.value)}
            placeholder="CUIL"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />
        </div>
        <div className="areaCont">
          <textarea
            value={msn5}
            onChange={(e) => setMsn5(e.target.value)}
            placeholder="Dirección/descripción del lugar"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />

          <textarea
            value={msn6}
            onChange={(e) => setMsn6(e.target.value)}
            placeholder="Altura"
            style={{
              textAlign: "center",
              width: "80%",
              height: "auto",
              borderColor: "white",
            }}
            className="slider-container"
          />
        </div>

        <label>
          <p className="rubik-p5">Mensaje:</p>
        </label>

        <textarea
          value={msn7}
          onChange={(e) => setMsn7(e.target.value)}
          placeholder="Describa su ubicación y sus requerimientos de internet"
          style={{
            textAlign: "start",
            width: "80%",
            height: "10rem",
            borderColor: "white",
          }}
          className="slider-container"
        />

        <p className="rubik-p5">Elegi el plan por el cual estás interesado</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {data.plan.map((option) => (
            <div key={option.id}>
              <p className="rubik-p5">{option.id}</p>
              <input
                type="checkbox"
                className={"checkBox " + option.id}
                name={option.id}
                value={option}
                checked={selectedItems.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
              <label htmlFor={"checkbox-" + option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="pricesDiv" style={{ height: "800px" }}>
        <h2>Para una mejor atencion, seleccione su dirección en el mapa</h2>
        <MapPicker onLocationSelect={handleLocationSelect} />
      </div>

      <div className="pricesDiv" style={{ height: "auto", gap: "2rem" }}>
        <p className="rubik-p5">
          Para finalizar, elegi el medio de contacto que vos prefieras:
        </p>


        <button onClick={handleSend} className="nav-btn">
          Pedir presupuesto
        </button>
      </div>
    </main>
  );
};
