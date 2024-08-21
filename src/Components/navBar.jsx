import logo from "../assets/REDLINE PNG TRANSP 05.png"
//import wpsLogo from "../assets/wps.png"
import instaLogo from "../assets/Instagram.png"
import { NavLink } from "react-router-dom"
export const NavBar = () => {
    //<a><img src={wpsLogo} alt="WhatsApp" width="30"/></a>
    return(
        <header>
        <div className="top-bar">
            <div className="logo">
                <NavLink to={"/"}>
                    <img src={logo} alt="Logo" width="250px"/>
                </NavLink>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/redlinenetsrl?igsh=bnR0bDhyNWp0MzB0" target="_blank" rel="noreferrer"><img src={instaLogo} alt="Instagram" width="30"/></a>
            </div>
        </div>

        <nav className="nav-bar">
            <button className="nav-btn">
                <NavLink to={"/services"} className={"link"}>
                    <p className="rubik-p">Nuestros servicios</p>
                </NavLink>
            </button>
            <button className="nav-btn">
                <NavLink to={"/aboutUs"} className={"link"}>
                    <p className="rubik-p">Sobre nosotros</p>
                </NavLink>
            </button>
            <button className="nav-btn">
                <NavLink to={"/prices"} className={"link"}>
                    <p className="rubik-p">Cotizaciones</p>
                </NavLink>
            </button>
            <button className="nav-btn">
                <NavLink to={"/contact"} className={"link"}>
                    <p className="rubik-p">Contacto</p>
                </NavLink>
            </button>
        </nav>
        
    </header>
    )
}