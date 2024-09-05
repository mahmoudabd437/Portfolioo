import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="contact" id="contact">
        <div className="container">
          <div className="row">
            <ul className="col-lg-4 col-md-6">
              <h3 className="text-white">Contact</h3>
              <li className="text-white">
                Email:
                <span className="text-white-50">
                  Mahmoudalngm2004@gmail.com
                </span>
              </li>
              <li className="text-white">
                Phone: <span className="text-white-50">+20 1128019635</span>
              </li>
              <li className="text-white">
                Address:{" "}
                <span className="text-white-50">Egypt, Giza, Haram</span>
              </li>
            </ul>
            <ul className="col-lg-4 col-md-6 text-lg-center text-md-start links">
              <h3 className="text-white">Links</h3>
              <li className="text-white">
                <Link
                  to={"/"}
                  className="list text-white-50 fs-5"
                  onClick={() => {
                    let nav = document.querySelectorAll(".nav-link");
                    nav.forEach((element) => {
                      element.classList.remove("active");
                    });
                    let list = document.querySelectorAll(".nav-link")[0];
                    list.classList.add("active");
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="text-white">
                <Link
                  to={"product"}
                  className="list text-white-50 fs-5"
                  onClick={() => {
                    let nav = document.querySelectorAll(".nav-link");
                    nav.forEach((element) => {
                      element.classList.remove("active");
                    });
                    let list = document.querySelectorAll(".nav-link")[2];
                    list.classList.add("active");
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="text-white">
                <Link
                  to={"services"}
                  className="list text-white-50 fs-5"
                  onClick={() => {
                    let nav = document.querySelectorAll(".nav-link");
                    nav.forEach((element) => {
                      element.classList.remove("active");
                    });
                    let list = document.querySelectorAll(".nav-link")[1];
                    list.classList.add("active");
                  }}
                >
                  Services
                </Link>
              </li>
            </ul>
            <ul className="col-lg-4 col-md-6">
              <ul className="d-flex justify-content-between">
                <li>
                  <a
                    href="https://wa.me/+201128019635"
                    target="_blank"
                    aria-label="whatsapp"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mahmoudabd437/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mahmoud-abd-elmoneam-ramadan-738146304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/mahmoudabd2020/"
                    aria-label="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer">
        <p className="text-center text-white">
          © {year} Mahmoud Abd. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
