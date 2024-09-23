import React, { useState } from "react";
import "../styles/prices.css";
import data from "../data/info.json";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Prices = () => {
  const [medio, setMedio] = useState(false);
  const [method, setMethod] = useState("whatsapp");
  const [color, setColor] = useState("#9fff89");
  const [selectedItems, setSelectedItems] = useState([]);
  const Navigate = useNavigate();

  //generador de textarea
  //agregar control de blanco
  //agregar control de datos(int,string,ect)
  const entradas = [
    "Nombre",
    "Apellido",
    "DNI",
    "CUIL",
    "Dirección/descripción del lugar",
    "Altura",
    "Describa su ubicación y sus requerimientos de internet",
  ];
  const [textareaValues, setTextareaValues] = useState({
    Nombre: "",
    Apellido: "",
    DNI: "",
    CUIL: "",
    Dirección: "",
    Altura: "",
    Descripcion: "",
  });
  const handleTextareaChange = (e, attribute) => {
    const { value } = e.target;
    setTextareaValues((prevValues) => ({
      ...prevValues,
      [attribute]: value,
    }));
  };

  const handleSend = () => {
    console.log(textareaValues);
    let intro =
      "nombre y apellido :" +
      textareaValues.Nombre +
      textareaValues.Apellido +
      ". DNI: " +
      textareaValues.DNI +
      ". CUIL: " +
      textareaValues.CUIL +
      ". Dirección: " +
      textareaValues.Dirección +
      ". Altura: " +
      textareaValues.Altura +
      " .Detalles: " +
      textareaValues.Descripcion;

    let intro2 = " . Planes solicitados: ";

    for (
      let index = 0;
      index < { selectedItems }.selectedItems.length;
      index++
    ) {
      intro2 =
        intro2 + { selectedItems }.selectedItems[index].id.toString() + " ";
    }

    if (method === "whatsapp") {
      const whatsappUrl = `https://wa.me/+5491126890280?text=${encodeURIComponent(
        intro + ". Planes solicitados: " + intro2
      )}`;
      Navigate("/notify/" + textareaValues.Nombre);
      window.open(whatsappUrl, "_blank");
    } else if (method === "email") {
      console.log(intro2);
      const emailUrl =
        "mailto:someone@example.com?subject=Nuevo cliente " +
        textareaValues.Nombre +
        textareaValues.Apellido +
        "&body=" +
        intro +
        ". " +
        intro2;
      Navigate("/notify/" + textareaValues.Nombre);
      window.open(emailUrl, "_self");
    }
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

  //construir selector de forma de envio whatsapp/email
  const selectMedio = (opcion) => {
    setMedio(!medio);
    if (opcion) {
      setColor("#ff0000");
      setMethod("email");
    } else {
      setColor("#9fff89");
      setMethod("whatsapp");
    }
  };

  //mover a estilos
  const style1 = {
    textAlign: "center",
    width: "60%",
    height: "auto",
    borderColor: "blue",
  };

  return (
    <main id="mainPrices">
      <h1 className="rubik-h1">Cotiza tu conexión</h1>
      <div className="pricesDiv">
        <div className="areaCont">
          {entradas.map((entrada, index) => (
            <div key={index} style={style1}>
              <label>
                <p className="rubik-p5">{entrada}</p>
              </label>
              <textarea
              style={{width:"80%"}}
                name={entrada}
                value={textareaValues[entrada]}
                onChange={(e) => handleTextareaChange(e, entrada)}
              />
            </div>
          ))}
        </div>
        <h2
          className="rubik-h2"
          style={{ fontSize: "xx-large", padding: "1rem" }}
        >
          Elegi el plan por el cual estás interesado
        </h2>
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

      <div className="pricesDiv" style={{ height: "auto", gap: "2rem" }}>
        <p className="rubik-p5">
          Para finalizar, elegi el medio de contacto que vos prefieras:
        </p>

        <button
          onClick={() => selectMedio(medio)}
          id="medioButton"
          style={{ backgroundColor: color }}
        >
          <p className="rubik-p5" style={{ fontWeight: "bold" }}>
            {method}
          </p>
        </button>

        <button onClick={handleSend} className="nav-btn">
          Pedir presupuesto
        </button>
      </div>
    </main>
  );
};
