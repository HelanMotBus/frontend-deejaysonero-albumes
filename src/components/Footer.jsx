import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className="text-light p-1">Enlaces</h3>
              <ul>
                <li>
                  <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/descargas">Descargas</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto">Contacto</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-center align-items-center">
              <h3 className="text-light p-1">Sígueme en mis Redes Sociales</h3>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <a
                className="p-1"
                href="https://www.facebook.com/people/Dee-Jay-Sonero-de-Barrio/61558376830988/"
                target="_blank"
              >
                <span className="badge text-bg-primary">Facebook</span>
              </a>
              <a
                className="p-1"
                href="https://www.instagram.com/deejaysonerodebarrio?igsh=MW9tMDNjczB1cHU3Zg==/"
                target="_blank"
              >
                <span className="badge text-bg-primary">Instagram</span>
              </a>
              <a
                className="p-1"
                href="https://www.youtube.com/@deejaysonerodebarrio6649"
                target="_blank"
              >
                <span className="badge text-bg-primary">Youtube</span>
              </a>

            </div>
            <div className="col-lg-4 text-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <a aria-disabled="true" className="p-1">
                <span className="badge text-bg-primary">
                  Copyright © 2025 DEE JAY SONERO MUSIC - Todos los Derechos
                  Reservados
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
