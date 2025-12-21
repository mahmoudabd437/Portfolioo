import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Api.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <section className="project" id="projects">
      <div className="container">
        <h1 className="text-primary text-center mb-5">My Projects</h1>

        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="card p-2 col-lg-4 col-md-6">
              <img src={product.image} className="card-img-top" alt={product.title} />

              <div className="card-body">
                <h5 className="card-title text-white-50">{product.title}</h5>
                <p className="card-text text-white">{product.description}</p>

                {product.stack && (
                  <small className="text-info d-block mb-2">
                    Tech: {product.stack}
                  </small>
                )}

                <div className="links d-flex justify-content-between">
                  {product.link && (
                    <a
                      href={product.link}
                      className="text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  )}

                  <a
                    href={product.github}
                    target="_blank"
                    rel="noreferrer"
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
