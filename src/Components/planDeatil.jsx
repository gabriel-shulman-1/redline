import planesData from "../data/info.json";
import { useParams } from "react-router-dom";
export const PlanDetail = () => {
  const planMain = {
    display: "flex",
    flexDirection: "row",
    position: "static",
    backgroundImage:
      "linear-gradient(to right, #2c2c2c 0%, black 100%, #505050 0%)",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2rem",
    height: "660px"
  };
  const ShowData = () => {
    const { Id } = useParams()
    let tittle = {planesData}.planesData.plan[{Id}.Id].id
    let text = {planesData}.planesData.description[{Id}.Id].id
    return (
      <>
      <h1>{tittle}</h1>
      <p>{text}</p>
      </>
    );
  };
  return (
    <main style={planMain}>
      <button className="slider">&#10094;</button>
      <div className="descriptionContainer">
        <div className="txDescription">
          <ShowData/>
        </div>
      </div>
      <button className="slider">&#10095;</button>
    </main>
  );
};
