import "../components/Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h1 className="text-center text-primary">My Skills</h1>

      <div className="container">
        <h3 className="text-center text-white-50 mt-5">Frontend</h3>
        <div className="carousal">
          <div className="carousal-track">
            <img src="/Assets/html5.png" alt="HTML" />
            <img src="/Assets/css3.png" alt="CSS" />
            <img src="/Assets/bootstrap-logo.png" alt="Bootstrap" />
            <img src="/Assets/js-logo.2.png" alt="JavaScript" />
            <img src="/Assets/React.logo.png" alt="React" />
            <img src="/Assets/github.png" alt="GitHub" />
          </div>
        </div>

        <h3 className="text-center text-white-50 mt-5">Backend</h3>
        <div className="carousal">
          <div className="carousal-track">
            <img src="/Assets/django.png" alt="Django" />
            <img src="/Assets/drf.png" alt="Django REST" />
            <img src="/Assets/postgresql.png" alt="PostgreSQL" />
            <img src="/Assets/sqlite.png" alt="SQLite" />
            <img src="/Assets/jwt.png" alt="JWT" />
            <img src="/Assets/github.png" alt="Git" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
