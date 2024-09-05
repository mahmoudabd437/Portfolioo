import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Api.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <section className="project" id="projects">
      <div className="container">
        <h1 className="text-primary text-center mb-5">My Projects</h1>
        <div className="row justify-content-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="card p-2 col-lg-4 col-md-6 text-sm-center text-md-start"
            >
              <img
                src={product.image}
                alt="project {product.id}"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title text-white-50">{product.title}</h5>
                <p className="card-text text-white">{product.description}</p>
                <div className="links d-flex justify-content-between">
                  <a
                    href={product.link}
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="project1"
                  >
                    View Project
                  </a>
                  <a
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Product;
