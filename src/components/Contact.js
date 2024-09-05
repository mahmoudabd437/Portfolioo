function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row flex-md-row flex-sm-column">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src="/image copy.png"
              alt="contact"
              style={{
                background: "transparent",
                maxWidth: "500px",
                width: "100%",
              }}
            />
          </div>
          <div className="col p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <p className="text-white">
                <span className="text-info">*</span> Your Name
              </p>
              <input
                type="text"
                className="p-2 mb-3 w-100"
                placeholder="Your Name"
              />
              <p className="text-white">
                <span className="text-primary">*</span> Email
              </p>
              <input
                type="email"
                className="p-2 mb-3 w-100"
                placeholder="Email"
              />
              <p className="text-white">
                <span className="text-primary">*</span> Message
              </p>
              <textarea className="p-2 mb-3 w-100" placeholder="Your Name" />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
