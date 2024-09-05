import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link to={"/"} className="navbar-brand fw-bold active fs-4">
          Mahmoud Abd
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ flexGrow: 0 }}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"/"}
                className="nav-link active"
                aria-current="page"
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
            <li className="nav-item">
              <Link
                to={"services"}
                className="nav-link"
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
            <li className="nav-item">
              <Link
                to={"product"}
                className="nav-link"
                onClick={() => {
                  let nav = document.querySelectorAll(".nav-link");
                  nav.forEach((element) => {
                    element.classList.remove("active");
                  });
                  let list = document.querySelectorAll(".nav-link")[2];
                  list.classList.add("active");
                }}
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"contact"}
                className="nav-link"
                href="#contact"
                onClick={() => {
                  let nav = document.querySelectorAll(".nav-link");
                  nav.forEach((element) => {
                    element.classList.remove("active");
                  });
                  let list = document.querySelectorAll(".nav-link")[3];
                  list.classList.add("active");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
