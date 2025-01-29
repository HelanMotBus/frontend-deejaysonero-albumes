import { NavLink } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <nav className="navbar navbar-dark">
        <img
          src="https://i.postimg.cc/vBN3LmF8/logo-sonero.png"
          className="rounded float-start p-1 logo"
        />
        <ul
          className="nav nav-pills mb-3 justify-content: center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <NavLink to="/inicio">
              <button className="btn btn-danger mx-1 p-3">Inicio</button>
            </NavLink>
          </li>
          <li className="nav-item" role="presentation">
            <NavLink to="/descargas">
              <button className="btn btn-danger mx-1 p-3">Descargas</button>
            </NavLink>
          </li>
          <li className="nav-item" role="presentation">
            <NavLink to="/contacto">
              <button className="btn btn-danger mx-1 p-3">Contacto</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
