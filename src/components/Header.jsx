import { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
const Search = lazy(() => import("./Search"));

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/account/signin");
  };

  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/" className="text-decoration-none">
              <span className="fabstore-header-logo">Fabstore</span>
            </Link>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-4">
            <div className="header-actions" style={{ gap: '1.2rem' }}>
              <Link to="/cart" className="header-cart-btn">
                <i className="bi bi-cart3"></i>
              </Link>
              <div className="btn-group">
                <button
                  type="button"
                  className="header-profile-btn"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-fill"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <i className="bi bi-person-square"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/star/zone">
                      <i className="bi bi-star-fill text-warning"></i> Star Zone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                      <i className="bi bi-list-check text-primary"></i> Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                      <i className="bi bi-heart-fill text-danger"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <i className="bi bi-bell-fill text-primary"></i>
                      Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      <i className="bi bi-info-circle-fill text-success"></i>
                      Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                      <i className="bi bi-door-closed-fill text-danger"></i>
                      Sign in
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

