import "./Skills.css";

const images = [
  { src: "/Assets/html5.png", title: "HTML" },
  { src: "/Assets/css3.png", title: "CSS" },
  { src: "/Assets/bootstrap-logo.png", title: "Bootstrap" },
  { src: "/Assets/js-logo.2.png", title: "JavaScript" },
  { src: "/Assets/React.logo.png", title: "React" },
  { src: "/Assets/github.png", title: "GitHub" },
  { src: "/Assets/1_slHeZngyeUr7ypEz7MNL5w.png", title: "Django" },
  { src: "/Assets/django-rest-framework.png", title: "Django REST" },
  { src: "/Assets/png-transparent-postgresql-plain-wordmark-logo-icon.png", title: "PostgreSQL" },
  { src: "/Assets/sqlite-db-browser.png", title: "SQLite" },
];

// علشان الحركة تكون infinite ناعمة
const sliderImages = [...images, ...images];

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="slider">
        <div className="list">
          {sliderImages.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
