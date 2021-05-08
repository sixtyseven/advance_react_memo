const ContactMe = () => {
  console.log("[render] Page Contact Me ");
  return (
    <div>
      <h3>Contact Me</h3>
      <br />
      <div>
        <form action="https://formspree.io/moqqobrb" method="POST">
          <div className="form-group">
            <label htmlFor="contact-form-name">
              Your Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="contact-form-name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-form-email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="contact-form-email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-form-message">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              name="message"
              rows={6}
              id="contact-form-message"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
