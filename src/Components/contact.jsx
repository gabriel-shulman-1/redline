import "../styles/contact.css";
import instagram from "../assets/Instagram.png";
import wpsLogo from "../assets/wps.png";
import mail from "../assets/mail.svg"
export const Contact = () => {
  return (
    <main id="contact-container">
      <h1 className="rubik-h1">Contacto</h1>
      <div className="contact-info">
        <div className="info-item">
          <div className="social-links">
          <img src={wpsLogo} alt={wpsLogo} />
            <p>
              <a href="tel:+54 011 5523-8433">+54 011 5523-8433</a>
            </p>
          </div>
        </div>
        <div className="info-item">
          <div className="social-links">
            <img src={mail} alt={mail} />
            <p>
            <a href="mailto:redline.internet55@gmail.com">
              redline.internet55@gmail.com
            </a>
          </p>
          </div>
        </div>
        <div className="info-item">
          <div className="social-links">
            <img src={instagram} alt={instagram} />
            <p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h2 className="rubik-h2">Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3283.394570501988!2d-58.88771802337915!3d-34.619467958331676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM3JzEwLjEiUyA1OMKwNTMnMDYuNSJX!5e0!3m2!1ses!2sar!4v1724250116925!5m2!1ses!2sar"
          width="90%"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Ubicación"
          samesite="Strict"
          id="map"
        ></iframe>
      </div>
    </main>
  );
};
