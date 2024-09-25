import logo from "../assets/REDLINE PNG TRANSP 09.png";
import useResponsive from "./useResponsive";
export const Footer = () => {
  const { isDesktop } = useResponsive();
  const siPc = {
    display: "flex",
    flexDirection: "row",
  };
  const noPc = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <footer style={!isDesktop ? noPc : siPc}>
      <div
        className="divFooter"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt={logo} style={{ width: "60px", height: "60px" }} />
        <h3 className="rubik-h3">RedLine internet</h3>
      </div>
      <div className="divFooter">
        <h3 className="rubik-h3">Contacto:</h3>
        <ul>
          <li>
            <p className="rubik-p5">Mail: redline.internet55@gmail.com</p>
          </li>
          <li>
            <p className="rubik-p5">Telefono: +54 011 5523-8433</p>
          </li>
          <li>
            <p className="rubik-p5">
              Dirección: Rivadavia 287 (General Rodríguez), CP: B1748
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
