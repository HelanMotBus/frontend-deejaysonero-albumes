import { useEffect, useState } from "react";
import { Global } from "../helpers/Global";
import { NavLink } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";

const Downloads = () => {
  const [albumes, setAlbumes] = useState([]);

  useEffect(() => {
    getAlbumes();
  }, []);

  const getAlbumes = async () => {
    const request = await fetch(Global.url + "listar", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
      },
    });

    const data = await request.json();

    if (data.albumes && data.status == "success") {
      setAlbumes(data.albumes);
      console.log(albumes);
    }
  };

  return (
    <>
      <Header/>
        <div className="d-flex flex-row align-items-center justify-content-center mb-3 mt-3 p-3 row">
          {albumes.map((album) => {
            return (
              
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={album._id}>
                  {/*smdispositivos entre 576 y 768 | md entre 768 y 992 | lg entre 992 y 1200 | xl mayores de 1200 */}
                  {/*diseño responsivo de las columnas dependiendo el tamaño*/}
                  <NavLink to={album.enlace} target="_blank">
                    <img
                      src={Global.url + "imagen/" + album.imagen}
                      className="card-img mb-3 rounded-1"
                      alt={album.nombre}
                    />
                  </NavLink>
                </div>
              
            );
          })}
        </div>
     <Footer/>
    </>
  );
};

export default Downloads;
