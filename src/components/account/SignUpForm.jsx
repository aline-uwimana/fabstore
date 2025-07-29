import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  email,
  name,
} from "../../helpers/validation";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import "./SignUpForm.css";

// Custom validation for password confirmation
const confirmPassword = (value, allValues) => {
  if (value !== allValues.password) {
    return "Passwords do not match";
  }
  return undefined;
};

// Password strength checker
const getPasswordStrength = (password) => {
  if (!password) return { strength: '', text: '' };
  
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  
  if (score < 3) return { strength: 'weak', text: 'Weak password' };
  if (score < 5) return { strength: 'medium', text: 'Medium strength password' };
  return { strength: 'strong', text: 'Strong password' };
};

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const [passwordStrength, setPasswordStrength] = useState({ strength: '', text: '' });

  const handlePasswordChange = (e) => {
    const strength = getPasswordStrength(e.target.value);
    setPasswordStrength(strength);
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-header mb-4">
        <h2 className="text-center fw-bold text-primary mb-2">Create Account</h2>
        <p className="text-center text-muted">Join us and start your shopping journey</p>
      </div>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`needs-validation signup-form ${submitFailed ? "was-validated" : ""}`}
        noValidate
      >
        <div className="row mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <Field
              name="firstName"
              type="text"
              label="First Name"
              component={renderFormField}
              placeholder="Enter your first name"
              validate={[required, name]}
              required={true}
            />
          </div>
          <div className="col-md-6">
            <Field
              name="lastName"
              type="text"
              label="Last Name"
              component={renderFormField}
              placeholder="Enter your last name"
              validate={[required, name]}
              required={true}
            />
          </div>
        </div>
        
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
          placeholder="Create a strong password"
          icon={IconShieldLock}
          validate={[required, maxLength20, minLength8]}
          required={true}
          maxLength="20"
          minLength="8"
          className="mb-3"
          onChange={handlePasswordChange}
        />
        
        {passwordStrength.text && (
          <div className={`password-strength ${passwordStrength.strength}`}>
            <i className={`bi bi-${passwordStrength.strength === 'strong' ? 'check-circle' : passwordStrength.strength === 'medium' ? 'exclamation-circle' : 'x-circle'}`}></i>
            {passwordStrength.text}
          </div>
        )}
        
        <Field
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          component={renderFormGroupField}
          placeholder="Confirm your password"
          icon={IconShieldLock}
          validate={[required, confirmPassword]}
          required={true}
          className="mb-4"
        />
        
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="termsAndConditions" required />
          <label className="form-check-label text-muted" htmlFor="termsAndConditions">
            I agree to the <Link to="/terms" className="text-primary">Terms & Conditions</Link> and <Link to="/privacy" className="text-primary">Privacy Policy</Link>
          </label>
        </div>
        
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="newsletter" />
          <label className="form-check-label text-muted" htmlFor="newsletter">
            Subscribe to our newsletter for updates and exclusive offers
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
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
        
        <div className="text-center mb-4">
          <span className="text-muted">Already have an account? </span>
          <Link 
            className="text-decoration-none text-primary fw-medium" 
            to="/account/signin" 
            title="Sign In"
          >
            Sign in here
          </Link>
        </div>
        
        <div className="divider-container mb-4">
          <div className="divider-line"></div>
          <span className="divider-text">or sign up with</span>
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
    form: "signup",
  })
)(SignUpForm);
