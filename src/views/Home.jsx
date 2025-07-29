import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = (e) => {
    e.preventDefault();
    const isLoggedIn = !!localStorage.getItem("authToken");
    if (isLoggedIn) {
      navigate("/category");
    } else {
      navigate("/account/signin");
    }
  };

  return (
    <div className="fabstore-home">
      {/* Hero Section */}
      <section className="home-hero py-5 text-center" style={{background: "#E0E0E0", color: '#111'}}>
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-3" style={{color: '#111'}}>Welcome to Fabstore</h1>
          <p className="lead mb-4" style={{color: '#111'}}>At Fabstore, we believe shopping should be inspiring, easy, and fun. Our mission is to bring you the best products, unbeatable deals, and a seamless experience — every single day.</p>
          <button onClick={handleShopNow} className="btn btn-warning btn-lg fw-bold shadow">Shop Now</button>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="home-gallery py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{color: "#14213d"}}>Discover Our World</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <img src="/images/banner/insta5.jpg" alt="Gallery 1" className="img-fluid rounded shadow gallery-img" />
              <div className="mt-2 text-muted small">Shop the latest fashion trends and styles.</div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <img src="/images/banner/insta7.jpg" alt="Gallery 2" className="img-fluid rounded shadow gallery-img" />
              <div className="mt-2 text-muted small">Discover exclusive deals and offers every day.</div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <img src="/images/banner/lio.jpeg" alt="Gallery 3" className="img-fluid rounded shadow gallery-img" />
              <div className="mt-2 text-muted small">Quality products for your home and lifestyle.</div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <img src="/images/banner/potr.webp" alt="Gallery 4" className="img-fluid rounded shadow gallery-img" />
              <div className="mt-2 text-muted small">Join our community and shop with confidence.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{color: "#14213d"}}>Featured Products</h2>
          <div className="row g-4 justify-content-center">
            {/* Example featured products - replace with real data as needed */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <img src="/images/products/tshirt_black_480x400.webp" className="card-img-top" alt="T-shirt Black" />
                <div className="card-body text-center">
                  <h5 className="card-title">Classic Black T-shirt</h5>
                  <p className="card-text text-muted">$19.99</p>
                  <a href="#" className="btn btn-primary btn-sm">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <img src="/images/products/tshirt_green_480x400.webp" className="card-img-top" alt="T-shirt Green" />
                <div className="card-body text-center">
                  <h5 className="card-title">Green T-shirt</h5>
                  <p className="card-text text-muted">$17.99</p>
                  <a href="#" className="btn btn-primary btn-sm">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <img src="/images/products/tshirt_grey_480x400.webp" className="card-img-top" alt="T-shirt Grey" />
                <div className="card-body text-center">
                  <h5 className="card-title">Grey T-shirt</h5>
                  <p className="card-text text-muted">$18.99</p>
                  <a href="#" className="btn btn-primary btn-sm">Add to Cart</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <img src="/images/products/tshirt_red_480x400.webp" className="card-img-top" alt="T-shirt Red" />
                <div className="card-body text-center">
                  <h5 className="card-title">Red T-shirt</h5>
                  <p className="card-text text-muted">$16.99</p>
                  <a href="#" className="btn btn-primary btn-sm">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{color: "#14213d"}}>Shop by Category</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm text-center p-3 h-100">
                <img src="/images/category/male.webp" alt="Men" className="img-fluid mb-2" style={{height: "80px", objectFit: "contain"}} />
                <h6 className="fw-bold">Men</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm text-center p-3 h-100">
                <img src="/images/category/female.webp" alt="Women" className="img-fluid mb-2" style={{height: "80px", objectFit: "contain"}} />
                <h6 className="fw-bold">Women</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm text-center p-3 h-100">
                <img src="/images/category/footwear.webp" alt="Footwear" className="img-fluid mb-2" style={{height: "80px", objectFit: "contain"}} />
                <h6 className="fw-bold">Footwear</h6>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm text-center p-3 h-100">
                <img src="/images/category/smartwatch.webp" alt="Smartwatch" className="img-fluid mb-2" style={{height: "80px", objectFit: "contain"}} />
                <h6 className="fw-bold">Smartwatch</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{color: "#14213d"}}>What Our Customers Say</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="mb-3">“Fabstore is my go-to for online shopping. Fast delivery and great deals!”</p>
                <div className="fw-bold">— Alex M.</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="mb-3">“I love the variety and the customer service is top-notch. Highly recommend!”</p>
                <div className="fw-bold">— Priya S.</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="mb-3">“Shopping at Fabstore is always a pleasure. The site is easy to use and the products are quality.”</p>
                <div className="fw-bold">— John D.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter-section py-3" style={{background: '#14213d'}}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center text-white">
              <h2 className="fw-bold mb-2" style={{fontSize: '1.5rem'}}>Stay in the Loop!</h2>
              <p className="mb-3" style={{fontSize: '1rem'}}>Subscribe for exclusive offers, new arrivals, and more.</p>
              <form className="row g-2 justify-content-center">
                <div className="col-12 col-md-8">
                  <input type="email" className="form-control form-control-sm" placeholder="Enter your email" required />
                </div>
                <div className="col-12 col-md-4 mt-2 mt-md-0">
                  <button type="submit" className="btn btn-warning btn-sm w-100 fw-bold">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
