import { useEffect, useState } from "react";
import { Global } from "../helpers/Global";
import { NavLink } from "react-router-dom";

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
      
        <div className="d-flex flex-row align-items-center justify-content-center mb-3 mt-3 p-3 row row-cols-5">
          {albumes.map((album) => {
            return (
              
                <div className="col" key={album._id}>
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
     
    </>
  );
};

export default Downloads;
