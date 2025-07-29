import { lazy } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="signin-page">
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Left Side - Image Section */}
          <div className="col-lg-6 d-none d-lg-block signin-image-section">
            <div className="signin-image-container">
              <div className="signin-image-overlay">
                <div className="signin-image-content">
                  <h1 className="text-white fw-bold mb-3">Welcome to Fab Store</h1>
                  <p className="text-white-50 lead mb-4">
                    Discover amazing products and exclusive deals. Sign in to access your personalized shopping experience.
                  </p>
                  <div className="signin-features">
                    <div className="feature-item">
                      <i className="bi bi-shield-check text-white fs-4 me-3"></i>
                      <span className="text-white">Secure & Fast Checkout</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-truck text-white fs-4 me-3"></i>
                      <span className="text-white">Free Shipping on Orders</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-arrow-clockwise text-white fs-4 me-3"></i>
                      <span className="text-white">Easy Returns & Exchanges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form Section */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center signin-form-section">
            <div className="w-100">
              <div className="text-center mb-4">
                <Link to="/" className="text-decoration-none">
                  <h2 className="text-primary fw-bold mb-0">Fab Store</h2>
                </Link>
              </div>
              <SignInForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
