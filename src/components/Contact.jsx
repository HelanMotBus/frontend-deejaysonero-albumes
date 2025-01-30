import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  return (
    <>
    <Header/>
      <div className="d-flex justify-content-center rounded-1">
        <div className="d-flex flex-column bg-light text-center w-50 ">
          <div className="col ">
            <img
              src="https://i.postimg.cc/zvv48M5v/sonero1.jpg"
              className=" w-100 "
              alt="sonero de barrio"
            />
          </div>
          <div className="col">
            <div className="row ">
              <h5 className="card-title p-3">Contacto:</h5>
              <p className="text-center p-3">
                Dj-Programador, Melómano y Coleccionista de Salsa de la ciudad
                de Ibagué, capital del departamento del Tolima.
              </p>
            </div>
            <div className="row p-3">
              <p className="card-text text-center">
                Email: deejaysonerodebarrio@gmail.com
              </p>
              <p className="card-text text-center">Whatsapp: +57 3108751158</p>
            </div>
            <div>
              <button type="button" className="btn btn-warning p-3 mb-3">
                <a
                  className="p-1"
                  href="https://www.facebook.com/people/Dee-Jay-Sonero-de-Barrio/61558376830988/"
                  target="_blank"
                >
                  <span className="badge text-bg-warning">Facebook</span>
                </a>
              </button>
              <button type="button" className="btn btn-warning p-3 mb-3 mx-3">
                <a
                  className="p-1"
                  href="https://www.instagram.com/deejaysonerodebarrio?igsh=MW9tMDNjczB1cHU3Zg==/"
                  target="_blank"
                >
                  <span className="badge text-bg-warning">Instagram</span>
                </a>
              </button>
              <button type="button" className="btn btn-warning p-3 mb-3">
                <a
                  className="p-1"
                  href="https://www.youtube.com/@deejaysonerodebarrio6649"
                  target="_blank"
                >
                  <span className="badge text-bg-warning">Youtube</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
