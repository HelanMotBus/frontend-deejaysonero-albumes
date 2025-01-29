const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-light p-1">
          Dee Jay Sonero de Barrio - Ibagué - Tolima - Colombia
        </h1>
        <div className="d-flex flex-row align-items-center justify-content-sm-evenly p-3">
          <a
            className="btn btn-primary p-3"
            data-bs-toggle="collapse"
            href="#collapseGroups"
            role="button"
            aria-expanded="false"
            aria-controls="collapseGroups"
          >
            Grupos Aliados
          </a>
          <button
            className="btn btn-primary p-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Visita Nuestra Emisora Online de Salsa Dura
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <a
              className="p-3"
              href="https://www.radioguaguanco.com/"
              target="_blank"
            >
              <h1 className="text-bg-primary text-center p-1">
                www.radioguaguanco.com
              </h1>
            </a>
          </div>
        </div>
        <div className="collapse" id="collapseGroups">
          <div className="card card-body">
            <a
              className="p-3"
              href="https://www.facebook.com/sensaciondelguaguanco/"
              target="_blank"
            >
              <h1 className="text-bg-primary text-center p-1">
                Sensacion del Guaguanco
              </h1>
            </a>
            <a
              className="p-3"
              href="https://www.facebook.com/groups/2213598602372353"
              target="_blank"
            >
              <h1 className="text-bg-primary text-center p-1">
                Guaguanco con Criterio
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/*CARRUSEL DE IMÁGENES */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner d-flex justify-content-around">
          <div className="carousel-item active " data-bs-interval="10000">
            <img src="https://i.postimg.cc/59KZnxqC/sensacion.png" className="d-block w-50" alt="sensacion del guaguanco" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://i.postimg.cc/dVrpsGM2/guaguanco.png" className="d-block w-50" alt="guaguanco con criterio" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="https://i.postimg.cc/4yY2r9bh/emisora.png" className="d-block w-50" alt="radio guaguanco" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
