import React from "react";
import "./AboutUs.css";

const AboutUs = () => (
  <React.Fragment>
    <div className="container pt-5">
      {/* Our Story */}
      <div className="row align-items-center mb-5 aboutus-section">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="/images/banner/insta4.jpg" alt="Fabstore Community" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-dark mb-3">Our Story</h2>
          <p className="text-muted">
            Fabstore was founded with a simple idea: to make shopping a delightful experience for everyone. From the latest trends to everyday essentials, we curate a collection that brings joy to your doorstep. Our passionate team works tirelessly to ensure you find what you love, at prices you'll adore.
          </p>
        </div>
      </div>
      {/* Our Mission & Vision */}
      <div className="row align-items-center mb-5 flex-md-row-reverse aboutus-section">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="/images/banner/insta6.jpg" alt="Fabstore Values" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-dark mb-3">Our Mission & Vision</h2>
          <p className="text-muted">
            We are committed to quality, value, and customer happiness. Our vision is to be your favorite online destination, where every visit feels like a celebration. We believe in building a community, supporting our customers, and making a positive impact—one order at a time.
          </p>
        </div>
      </div>
      {/* New Gallery Row: cow.jpeg and insta7.jpg */}
      <div className="row mb-5 aboutus-section justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold aboutus-title mb-4">Our Community & Inspiration</h2>
          <p className="text-muted">Meet the spirit and inspiration behind Fabstore.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-5 text-center mb-3 mb-md-0">
          <img src="/images/banner/cow.jpeg" alt="Fabstore Inspiration" className="img-fluid rounded shadow" />
          <div className="mt-2 text-muted small">Inspired by nature and authenticity.</div>
        </div>
        <div className="col-12 col-sm-6 col-md-5 text-center">
          <img src="/images/banner/insta7.jpg" alt="Fabstore Community" className="img-fluid rounded shadow" />
          <div className="mt-2 text-muted small">A vibrant community of shoppers and dreamers.</div>
        </div>
      </div>
      {/* Discover Fabstore Gallery */}
      <div className="row mb-5 aboutus-section">
        <div className="col-12 text-center mb-4">
          <h2 className="fw-bold aboutus-title mb-4">Discover Fabstore</h2>
          <p className="text-muted">A glimpse into our world—where every product tells a story.</p>
        </div>
        <div className="col-12">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <img src="/images/banner/insta1.jpg" alt="Fabstore Gallery 1" className="img-fluid rounded shadow" />
              <div className="mt-2 text-muted small">Fashion for every occasion.</div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <img src="/images/banner/insta2.jpg" alt="Fabstore Gallery 2" className="img-fluid rounded shadow" />
              <div className="mt-2 text-muted small">Exclusive deals and offers.</div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <img src="/images/banner/insta3.jpg" alt="Fabstore Gallery 3" className="img-fluid rounded shadow" />
              <div className="mt-2 text-muted small">Quality and style, delivered.</div>
            </div>
          </div>
        </div>
      </div>
      {/* Thank You Section */}
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h3 className="fw-bold aboutus-title mb-3">Thank you for being part of our journey!</h3>
          <p className="lead text-secondary">
            Whether you're here for the latest trends, exclusive deals, or just to explore, Fabstore is here to make your shopping experience unforgettable. Welcome to the family!
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default AboutUs; 