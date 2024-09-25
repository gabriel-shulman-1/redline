import React, { useState } from "react";
import "../styles/prices.css";
import data from "../data/info.json";
import { useNavigate } from "react-router-dom";

export const Prices = () => {
  const [medio, setMedio] = useState(false);
  const [method, setMethod] = useState("whatsapp");
  const [color, setColor] = useState(["#ff0000","#ffffff"]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [attribute]: "",
    }));
  };
  const validateFields = () => {
    const newErrors = {};
    entradas.forEach((entrada) => {
      if (!textareaValues[entrada]) {
        newErrors[entrada] = `El campo ${entrada} no puede estar vacío.`;
      }
    });
    return newErrors;
  };
  const handleSend = () => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
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
  const selectMedio = (opcion) => {
    setMedio(!medio);
    if (opcion) {
      setColor(["#ff0000","#ffffff"]);
      setMethod("email");
    } else {
      setColor(["#9fff89","#000000"]);
      setMethod("whatsapp");
    }
  };
  const style1 = {
    textAlign: "center",
    width: "60%",
    height: "auto",
    borderColor: "blue",
    margin: "1rem",
  };
  const mystyle={
    background: 'linear-gradient(to right, #2c2c2c, #000000, #505050)'
  }
  return (
    <main id="mainPrices" style={mystyle}>
      <h1 className="rubik-h1">Cotiza tu conexión</h1>
      <div className="pricesDiv">
        <div className="areaCont">
          <h2
            className="rubik-h2"
            style={{ fontSize: "xx-large", padding: "1rem" }}
          >
            Ingrese sus datos
          </h2>
          {entradas.map((entrada, index) => (
            <div key={index} style={style1}>
              <label>
                <p className="rubik-p5">{entrada}</p>
                {errors[entrada] && (
                  <p style={{ color: "red" }}>{errors[entrada]}</p>
                )}
              <input
                type={
                  index !== 2 && index !== 3 && index !== 5 ? "text" : "number"
                }
                style={{
                  width: "80%",
                  height: "30px",
                  padding: "0.4rem",
                  borderRadius: "10px",
                  borderStyle: "none",
                }}
                name={entrada}
                value={textareaValues[entrada]}
                onChange={(e) => handleTextareaChange(e, entrada)}
                />
                </label>
            </div>
          ))}
        </div>
        <div className="areaCont">
          <h2
            className="rubik-h2"
            style={{ fontSize: "xx-large", padding: "1rem" }}
          >
            Elegi el plan por el cual estás interesado
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data.plan.map((option) => (
              <div key={option.id}>
                <label>
                  <p className="rubik-p5">{option.id}</p>
                <input
                  type="checkbox"
                  className={"checkBox " + option.id}
                  value={option}
                  checked={selectedItems.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pricesDiv" style={{ gap: "2rem" }}>
        <p className="rubik-p5">
          Hace click al boton para elegir el medio de comunicación:
        </p>
        <button
          onClick={() => selectMedio(medio)}
          id="medioButton"
          style={{ backgroundColor: color[0], borderStyle: "none",color:color[1] }}
        >
          <p
            className="rubik-p5"
          >
            {medio ? "Whatsapp" : "Email"}
          </p>
        </button>
        <button onClick={handleSend} className="nav-btn">
          Pedir presupuesto
        </button>
      </div>
    </main>
  );
};
