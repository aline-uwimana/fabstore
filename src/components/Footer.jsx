import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          <div className="col-md-4 py-3">
            <div className="h5 mb-2">Fabstore</div>
            <hr />
            <p>
              Fabstore is your trusted destination for quality products, unbeatable deals, and a seamless shopping experience. Join our community and discover a world of possibilities!
            </p>
          </div>
          <div className="col-md-4 py-3">
            <div className="h6">Contact Us</div>
            <hr />
            <address className="mb-2">
              <strong>Address:</strong> Kacyiru at Fablab Rwanda<br />
              <strong>Phone:</strong> 0789276080<br />
              <strong>Email:</strong> info@fabstore.com
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <span><i className="bi bi-telephone"></i> 0789276080</span><br />
            <span><i className="bi bi-envelope"></i> info@fabstore.com</span>
          </div>
          <div className="col-md-4 py-3">
            <div className="h6">Quick Links</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link to="/about-us" className="text-decoration-none text-white stretched-link">About Us</Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link to="/category" className="text-decoration-none text-white stretched-link">Our Collection</Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link to="/contact-us" className="text-decoration-none text-white stretched-link">Contact Us</Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link to="/account/signin" className="text-decoration-none text-white stretched-link">Sign In</Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link to="/account/signup" className="text-decoration-none text-white stretched-link">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center py-2" style={{fontSize: '0.95rem', borderTop: '1px solid #444'}}>
            &copy; {new Date().getFullYear()} Fabstore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
