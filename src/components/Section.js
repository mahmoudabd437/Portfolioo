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
              <Typewriter
                options={{
                  strings: [
                    "Hello, I'm Mahmoud Abdelmoneam,",
                    "Full Stack Developer (React & Django).",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 75,
                }}
              />
            </h1>

            <p className="text-white fs-4 mb-5">
              Building responsive and scalable web applications with modern
              frontend interfaces and powerful backend solutions.
            </p>

            <Link to={"/product"} className="btn btn-primary">
              My Projects
            </Link>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1-AohnokCyjjUzluuFoF3mnur_ZbAEWQ5/view"
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
