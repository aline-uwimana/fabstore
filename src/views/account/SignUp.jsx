import { lazy } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUpForm = lazy(() => import("../../components/account/SignUpForm"));

const SignUpView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="signup-page">
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Left Side - Image Section */}
          <div className="col-lg-6 d-none d-lg-block signup-image-section">
            <div className="signup-image-container">
              <div className="signup-image-overlay">
                <div className="signup-image-content">
                  <h1 className="text-white fw-bold mb-3">Join Fab Store Today</h1>
                  <p className="text-white-50 lead mb-4">
                    Create your account and unlock exclusive benefits, personalized recommendations, and amazing deals.
                  </p>
                  <div className="signup-features">
                    <div className="feature-item">
                      <i className="bi bi-star text-white fs-4 me-3"></i>
                      <span className="text-white">Exclusive Member Benefits</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-gift text-white fs-4 me-3"></i>
                      <span className="text-white">Welcome Bonus & Rewards</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-person-check text-white fs-4 me-3"></i>
                      <span className="text-white">Personalized Shopping Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form Section */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center signup-form-section">
            <div className="w-100">
              <div className="text-center mb-4">
                <Link to="/" className="text-decoration-none">
                  <h2 className="text-primary fw-bold mb-0">Fab Store</h2>
                </Link>
              </div>
              <SignUpForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
