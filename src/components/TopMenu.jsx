import { Link } from "react-router-dom";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue p-0">
      <div className="container-fluid justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav nav-center">
            <li className="nav-item">
              <Link className="nav-link nav-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-bold" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-bold" to="/category">
                Our Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-bold" to="/deals">
                Deals & Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-bold" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
