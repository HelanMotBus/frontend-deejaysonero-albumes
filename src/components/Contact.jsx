const Contact = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <div className="card w-50">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/src/assets/imagenes/sonero1.jpg"
              className=" card-img-top w-50"
              alt="sonero de barrio"
            />
            <div className="card-body">
              <h5 className="card-title">Contacto:</h5>
              <p className="card-text text-center">
                Dj-Programador, Melómano y Coleccionista de Salsa de la ciudad de Ibagué, capital del departamento del Tolima.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Email: deejaysonerodebarrio@gmail.com
                </li>
                <li className="list-group-item">Whatsapp: +57 3108751158</li>
              </ul>
              <button type="button" className="btn btn-warning">
                <a
                  className="p-1"
                  href="https://www.facebook.com/people/Dee-Jay-Sonero-de-Barrio/61558376830988/"
                  target="_blank"
                >
                  <span className="badge text-bg-warning">Facebook</span>
                </a>
              </button>
              <button type="button" className="btn btn-warning">
                <a
                  className="p-1"
                  href="https://www.instagram.com/deejaysonerodebarrio?igsh=MW9tMDNjczB1cHU3Zg==/"
                  target="_blank"
                >
                  <span className="badge text-bg-warning">Instagram</span>
                </a>
              </button>
              <button type="button" className="btn btn-warning">
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
    </>
  );
};

export default Contact;
