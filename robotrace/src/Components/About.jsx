import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your Trusted Partner for Home Services</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to our Service Provider Platform! We are a team of passionate professionals
            committed to connecting customers with skilled and verified service providers. Whether
            you need a plumber, electrician, cleaner, or painter — we’ve got your back.
          </p>
          <p>
            Founded by <strong>Ibrar Iqbal</strong>, a MERN & .NET Full Stack Developer from Lahore,
            this platform is built using cutting-edge technologies like React, Node.js, and MongoDB
            to ensure a seamless experience for users.
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1f6d5cdb10a0?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
          />
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To simplify how people find reliable help for their everyday needs by building a trustworthy,
          fast, and customer-first platform.
        </p>
      </section>
    </div>
  );
};

export default About;
