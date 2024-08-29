import React, { useState } from "react";
import "../styles/prices.css";
import { MapPicker } from "./mapPicker";
import data from "../data/info.json";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
/*import wps from "../assets/wps.svg"
import mail from "../assets/mail.svg"*/

export const Prices = () => {
  const [msn1, setMsn1] = useState("");
  const [msn2, setMsn2] = useState("");
  const [msn3, setMsn3] = useState("");
  const [msn4, setMsn4] = useState("");
  const [gps, setGps] = useState("");
  const [method, setMethod] = useState("whatsapp");
  const [selectedItems, setSelectedItems] = useState([]);
  const Navigate = useNavigate();

  const handleSend = () => {
    let intro1 = "nombre y apellido: " + msn1;
    let intro2 = ". DNI/CUIL: " + msn2;
    let intro3 = ". Dirección: " + msn3;
    let intro4 = ". Descripción: " + msn4;
    let intro5 = ". Planes solicitados: ";

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
        intro1 +
          intro2 +
          intro3 +
          intro4 +
          ". Ubicación: X:" +
          gps[0] +
          " Y:" +
          gps[1] +
          ". Planes solicitados: " +
          intro5
      )}`;
      Navigate("/notify/" + msn1);
      window.open(whatsappUrl, "_blank");
    } else if (method === "email") {
      console.log(intro5);
      const emailUrl =
        "mailto:someone@example.com?subject=Nuevo cliente " +
        { msn1 }.msn1 +
        "&body=" +
        intro1 +
        intro2 +
        intro3 +
        intro4 +
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

      <div className="pricesDiv" style={{ height: "800px" }}>
        <h2 className="rubik-h2">Seleccione su dirección en el mapa</h2>
        <MapPicker onLocationSelect={handleLocationSelect} />
      </div>

      <div className="pricesDiv">
        <label>
          <p className="rubik-p5">Introduzca sus datos:</p>
        </label>
        <textarea
          value={msn1}
          onChange={(e) => setMsn1(e.target.value)}
          placeholder="Nombre y apellido"
          style={{
            textAlign: "center",
            width: "80%",
            height: "auto",
          }}
          className="slider-container"
        />
        <textarea
          value={msn2}
          onChange={(e) => setMsn2(e.target.value)}
          placeholder="DNI ó CUIL"
          style={{
            textAlign: "center",
            width: "80%",
            height: "auto",
          }}
          className="slider-container"
        />
        <textarea
          value={msn3}
          onChange={(e) => setMsn3(e.target.value)}
          placeholder="Dirección y descripción del lugar"
          style={{
            textAlign: "center",
            width: "80%",
            height: "auto",
          }}
          className="slider-container"
        />
      </div>

      <div className="pricesDiv">
        <label className="priceLabel">
          <p className="rubik-p5">Enviar solicitud por: </p>
        </label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="slider-container"
          style={{ textAlign: "center" }}
        >
          <option value="whatsapp" id="wps">
            WhatsApp
          </option>
          <option value="email" id="email">
            Email
          </option>
        </select>
      </div>

      <div className="pricesDiv">
        <label>
          <p className="rubik-p5">Mensaje:</p>
        </label>
        <textarea
          value={msn4}
          onChange={(e) => setMsn4(e.target.value)}
          placeholder="Describa su ubicación y sus requerimientos de internet"
          style={{
            textAlign: "center",
            width: "80%",
            height: "10em",
          }}
          className="slider-container"
        />
      </div>

      <div className="pricesDiv">
        <h2>Elegi el plan por el cual estás interesado</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
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

        <button onClick={handleSend} className="nav-btn">
          Pedir presupuesto
        </button>
      </div>
    </main>
  );
};
