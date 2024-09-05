import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const iconMap = {
  faLaptopCode: faLaptopCode,
  faMobileScreenButton: faMobileScreenButton,
  faCode: faCode,
};
function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="text-primary text-center mb-5">Services</h1>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="card p-2 text-sm-center text-md-start">
                <FontAwesomeIcon
                  icon={iconMap[service.brand]}
                  size="3x"
                  className="text-primary"
                />
                <div className="card-body">
                  <h5 className="card-title text-white-50">{service.title}</h5>
                  <p className="card-text text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
