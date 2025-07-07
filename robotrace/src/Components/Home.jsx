import React, { useContext, useState, useCallback } from "react";
import Card from "../ShareComponents/Card"; // Assuming Card component can take props like title, description, imageUrl, and a footer/button section
import "./Home.css"; // Ensure this path is correct
import { context } from "../Context/Store"; // Ensure this path is correct

// React Icons Imports (professional set)
import {
  FaSun, FaMoon, FaArrowRight, FaCheckCircle, FaLaptopCode,
  FaChartLine, FaCogs, FaHandshake, FaEnvelope, FaLightbulb, FaShieldAlt
} from 'react-icons/fa';

// --- Constants for Image URLs (Professional and Service-Oriented) ---
const HERO_BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1519389950473-47ab03c0fd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQ2Mjd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBhZ2lsZSUyMHdvcmtpbmclMjBkaWdpdGFsfGVufDB8fHx8MTcwNjI0OTE4OHww&ixlib=rb-4.0.3&q=80&w=1920"; // Changed for a more generic professional team image
const WHY_CHOOSE_US_IMAGE = "https://images.unsplash.com/photo-1542740927-44026369c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQ2Mjd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRpZ2l0YWwlMjBzdHJhdGVneXxlbnwwfHx8fDE3MDYyNDkxODh8MA&ixlib=rb-4.0.3&q=80&w=1080"; // Image for the "Why Choose Us" section

// Service-specific images
const WEB_DEV_SERVICE_IMAGE = "https://images.unsplash.com/photo-1518770660439-46700c97ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQ2Mjd8MHwxfHNlYXJjaHwxfHdlYiUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDB8fHwxNzA2MjQ5MTg4fDA&ixlib=rb-4.0.3&q=80&w=1080";
const DIGITAL_MARKETING_SERVICE_IMAGE = "https://images.unsplash.com/photo-1557804506-663806f369ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQ2Mjd8MHwxfHNlYXJjaHwxfGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzA2MjQ5MTg4fDA&ixlib=rb-4.0.3&q=80&w=1080";
const IT_CONSULTING_SERVICE_IMAGE = "https://images.unsplash.com/photo-1556761175-59744c6807d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQ2Mjd8MHwxfHNlYXJjaHwxfGl0JTIwc2VydmljZXMlMjBjb25zdWx0aW5nfGVufDB8fHwxNzA2MjQ5MTg4fDA&ixlib=rb-4.0.3&q=80&w=1080";

const Home = () => {
  const { username } = useContext(context);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkModeEnabled((prevMode) => !prevMode);
  }, []);

  const containerClassName = `container-fluid p-0 ${isDarkModeEnabled ? "container-dark" : "container-light"}`;

  // --- Service Data (organized for easy mapping to Cards) ---
  const services = [
    {
      id: 1,
      icon: FaLaptopCode,
      title: "Web & Software Development",
      description: "Building responsive, high-performance websites and web applications tailored to your business needs.",
      imageUrl: WEB_DEV_SERVICE_IMAGE,
      buttonText: "Learn More",
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Digital Marketing Solutions",
      description: "Boost your online presence with SEO, social media marketing, and targeted ad campaigns for maximum reach.",
      imageUrl: DIGITAL_MARKETING_SERVICE_IMAGE,
      buttonText: "Discover Now",
    },
    {
      id: 3,
      icon: FaCogs,
      title: "IT Consulting & Managed Services",
      description: "Strategic IT guidance to optimize your infrastructure, enhance security, and drive technological innovation.",
      imageUrl: IT_CONSULTING_SERVICE_IMAGE,
      buttonText: "Get Advice",
    },
  ];

  return (
    <div className={containerClassName}>
      {/* --- Hero Section --- */}
      <section className="hero-section text-center text-white py-5 mb-5 animate__animated animate__fadeIn"
               style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HERO_BACKGROUND_IMAGE})` }}>
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
            Empowering Your Business with <span className="highlight-text">Digital Excellence</span>
          </h1>
          <p className="lead fs-4 mb-5 animate__animated animate__fadeInUp">
            Welcome, {username || "Guest"}! We deliver innovative, tailored solutions for your success.
          </p>
          <button className="btn btn-lg btn-primary custom-btn-scale animate__animated animate__zoomIn"
                  onClick={() => alert("Redirecting to services page!")}>
            Explore Our Services <FaArrowRight className="ms-2" />
          </button>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="container my-5 py-5 animate__animated animate__fadeInUp">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={WHY_CHOOSE_US_IMAGE}
              alt="Business professionals collaborating"
              className="img-fluid rounded-4 shadow-lg border border-3 border-light-subtle animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4 text-gradient-primary">
              Why Partner With Our Experts?
            </h2>
            <p className="lead text-muted mb-4">
              At **[Your Company Name]**, we are committed to transforming your ideas into powerful digital realities. We combine innovative strategies with meticulous execution to drive tangible results for your business.
            </p>
            <ul className="list-unstyled why-choose-us-list">
              <li><FaCheckCircle className="text-success me-2" /> **Experienced Team:** Dedicated professionals with proven expertise.</li>
              <li><FaCheckCircle className="text-success me-2" /> **Tailored Solutions:** Customized strategies built for your unique needs.</li>
              <li><FaCheckCircle className="text-success me-2" /> **Transparent Process:** Clear communication and honest collaboration.</li>
              <li><FaCheckCircle className="text-success me-2" /> **Results-Driven:** Focused on delivering measurable impact and ROI.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Services Showcase Section --- */}
      <section className="container my-5 py-5">
        <h2 className="display-4 fw-bold text-center mb-5 text-gradient-primary animate__animated animate__fadeInDown">
          Our Core Services
        </h2>
        <div className="row justify-content-center g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 animate__animated animate__fadeInUp service-card-col">
              <Card
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl} // Pass the image URL to the Card component
                buttonText={service.buttonText}
                onButtonClick={() => alert(`Navigating to ${service.title} details!`)}
              >
                {/* Custom icon content for the card body, placed above title/description */}
                <div className="text-center mb-3">
                  <service.icon size={60} className="service-icon mb-3 text-primary" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="cta-section text-center text-white py-5 my-5 animate__animated animate__fadeIn">
        <div className="container py-5">
          <h2 className="display-3 fw-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="lead fs-4 mb-5">
            Don't just compete, dominate. Let's create a powerful digital strategy together.
          </p>
          <button className="btn btn-light btn-lg custom-btn-scale animate__animated animate__zoomIn"
                  onClick={() => alert("Opening Contact Form!")}>
            <FaEnvelope className="me-2" /> Request a Free Consultation
          </button>
        </div>
      </section>

      {/* --- Dark/Light Mode Toggle Section --- */}
      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center animate__animated animate__fadeIn">
            <button
              onClick={handleToggleDarkMode}
              className={`btn btn-lg w-100 py-3 ${isDarkModeEnabled ? "btn-dark-mode-toggle" : "btn-light-mode-toggle"}`}
              aria-label={isDarkModeEnabled ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkModeEnabled ? (
                <>
                  <FaSun className="me-2" size={20} /> Enable Light Mode
                </>
              ) : (
                <>
                  <FaMoon className="me-2" size={20} /> Enable Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="text-center text-muted small mt-5 pt-3 border-top">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p className="mb-0">
          <a href="#privacy" className="text-muted text-decoration-none me-3">Privacy Policy</a>
          <a href="#terms" className="text-muted text-decoration-none">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;