import React, { useState } from "react";
import "../styles/prices.css";
import { MapPicker } from "./mapPicker";
import data from "../data/info.json";
import "leaflet/dist/leaflet.css";

export const Prices = () => {
  let msgEmpty = "Antes, selecciona la forma en que vas a comunicarte";
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState("whatsapp");
  const [tipo, setTipo] = useState(msgEmpty);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSend = () => {
    if (method === "whatsapp") {
      const whatsappUrl = `https://wa.me/${recipient}?text=${encodeURIComponent(
        message + checkedItems
      )}`;
      window.open(whatsappUrl, "_blank");
    } else if (method === "email") {
      const emailUrl = `mailto:${recipient}?subject=Message&body=${encodeURIComponent(
        message + checkedItems
      )}`;
      window.open(emailUrl, "_self");
    }
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const handleLocationSelect = (position) => {
    console.log("Selected position:", position);
  };

  return (
    <main id="mainPrices">
      <h1 className=".inter-h1">Seleccione su direccíon en el mapa</h1>

      <div className="pricesDiv">
        <MapPicker onLocationSelect={handleLocationSelect} />
      </div>

      <div className="pricesDiv">
        <label className="priceLabel">Enviar solicitud por: </label>
        <select
          value={method}
          onChange={(e) => (setMethod(e.target.value), setTipo(e.target.value))}
          className="slider-container"
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
        <label className="priceLabel">
          {tipo[0].toLocaleUpperCase() + tipo.substring(1)}
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder={tipo === msgEmpty ? "" : "Introduzca su " + tipo}
          className="priceInputHolder"
        />
      </div>

      <div className="pricesDiv">
        <label className="priceLabel">Mensaje: </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describa su ubicacion y sus requerimientos de internet"
          style={{
            width: "80%",
            height: "10em",
          }}
          className="priceInputHolder"
        />
      </div>

      <div className="pricesDiv">
        <h2>Elegi el plan por el cual estas interesado</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {data.plan.map((option) => (
            <div key={option.id} style={{ margin: "2rem" }}>
              <p>{option.id}</p>
              <input
                type="checkbox"
                className={"checkBox " + option.id}
                name={option.id}
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
              <label
                htmlFor={"checkbox-" + option.id}
                checked={!!checkedItems[option.label]}
                onChange={handleChange}
              >
                {option.label}
              </label>
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
