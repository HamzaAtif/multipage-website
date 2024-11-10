import React from 'react';
import "./globals.css";
const Home = () => {
  return (
    <body>
    <div className="container">
      {/* welcome section */}
      <section className="welcome">
        <h1>Welcome to Our First next js website</h1>
        <p>Your one-stop solution for all your needs</p>
        <button className="Learn-more">Learn More</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Consulting</h3>
            <p>Professional consulting services to help you grow.</p>
          </div>
          <div className="service-card">
            <h3>Development</h3>
            <p>High-quality development services tailored to your needs.</p>
          </div>
          <div className="service-card">
            <h3>Support</h3>
            <p>Reliable support to keep your business running smoothly.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="Reviews">
        <h2>What Our Clients Say</h2>
        <div className="Review-cards">
          <p>The team provided excellent service and exceeded our expectations!</p>
          <span>- Sir Ameen Alam.</span>
        </div>
        <div className="Review-cards">
          <p>Highly recommend their development services. Truly a pleasure to work with.</p>
          <span>- Hamza Atif.</span>
        </div>
      </section>
    </div>
    </body>
  );
};

export default Home;
