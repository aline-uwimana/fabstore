import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import "./SignInForm.css";

const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <div className="signin-form-container">
      <div className="signin-form-header mb-4">
        <h2 className="text-center fw-bold text-primary mb-2">Welcome Back</h2>
        <p className="text-center text-muted">Sign in to your account to continue</p>
      </div>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`needs-validation signin-form ${submitFailed ? "was-validated" : ""}`}
        noValidate
      >
        <Field
          name="email"
          type="email"
          label="Email Address"
          component={renderFormGroupField}
          placeholder="Enter your email address"
          icon={IconEnvelope}
          validate={[required, email]}
          required={true}
          className="mb-4"
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={renderFormGroupField}
          placeholder="Enter your password"
          icon={IconShieldLock}
          validate={[required, maxLength20, minLength8]}
          required={true}
          maxLength="20"
          minLength="8"
          className="mb-4"
        />
        
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="rememberMe" />
          <label className="form-check-label text-muted" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        
        <div className="d-grid mb-4">
          <button
            type="submit"
            className="btn btn-primary btn-lg fw-semibold"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
        
        <div className="text-center mb-4">
          <Link 
            className="text-decoration-none text-primary fw-medium" 
            to="/account/signup" 
            title="Sign Up"
          >
            Don't have an account? Sign up
          </Link>
        </div>
        
        <div className="text-center mb-4">
          <Link
            className="text-decoration-none text-muted"
            to="/account/forgotpassword"
            title="Forgot Password"
          >
            Forgot your password?
          </Link>
        </div>
        
        <div className="divider-container mb-4">
          <div className="divider-line"></div>
          <span className="divider-text">or continue with</span>
          <div className="divider-line"></div>
        </div>
        
        <div className="social-login-container">
          <div className="row g-3">
            <div className="col-4">
              <button type="button" className="btn btn-outline-secondary w-100 social-btn">
                <i className="bi bi-google text-danger"></i>
                <span className="d-none d-sm-inline ms-1">Google</span>
              </button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-outline-secondary w-100 social-btn">
                <i className="bi bi-facebook text-primary"></i>
                <span className="d-none d-sm-inline ms-1">Facebook</span>
              </button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-outline-secondary w-100 social-btn">
                <i className="bi bi-twitter-x text-dark"></i>
                <span className="d-none d-sm-inline ms-1">Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default compose(
  reduxForm({
    form: "signin",
  })
)(SignInForm);
