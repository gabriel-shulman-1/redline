import instaLogo from "../assets/Instagram.png";
export const Contact = () => {
  return (
    <main id="contact-container">
        
      <h1>Contacto</h1>

      <div className="contact-info">
        <div className="info-item">
          <h2>Teléfono</h2>
          <p>
            <a href="tel:+123456789">+123 456 789</a>
          </p>
        </div>
        <div className="info-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:contacto@example.com">contacto@example.com</a>
          </p>
        </div>
        <div className="info-item">
          <h2>Redes Sociales</h2>
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3283.394570501988!2d-58.88771802337915!3d-34.619467958331676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM3JzEwLjEiUyA1OMKwNTMnMDYuNSJX!5e0!3m2!1ses!2sar!4v1724250116925!5m2!1ses!2sar"
          width="70%"
          height="600px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Ubicación"
          samesite="Strict"
        ></iframe>
      </div>

    </main>
  );
};
