import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
function Section() {
  return (
    <section className="info" id="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/Assets/profile.png" alt="profile" loading="lazy" />
          </div>
          <div className="col">
            <h1 className="text-primary mb-4">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Hello, I'm Mahmoud Abdelmoneam,",
                    "Front End Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 75,
                }}
              />{" "}
            </h1>
            <p className="text-white fs-4 mb-5">
              Building responsive websites , functional web pages that look
              great , websites with clean code and modern designs .
            </p>
            <Link
              to={"/product"}
              className="btn btn-primary"
              onClick={() => {
                let nav = document.querySelectorAll(".nav-link");
                nav.forEach((element) => {
                  element.classList.remove("active");
                });
                let list = document.querySelectorAll(".nav-link")[2];
                list.classList.add("active");
              }}
            >
              My Projects
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1-AohnokCyjjUzluuFoF3mnur_ZbAEWQ5/view?usp=sharing"
              className="btn btn-primary ms-3"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
