import React, { useState } from "react";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <h1 className="fw-bold mb-4 text-center" style={{color: '#14213d'}}>Contact Us</h1>
          <p className="text-center text-muted mb-4">Have a question, feedback, or need help? Fill out the form below and our team will get back to you as soon as possible.</p>
          {submitted ? (
            <div className="alert alert-success text-center">
              Thank you for contacting Fabstore! We have received your message and will respond soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary fw-bold">Send Message</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
