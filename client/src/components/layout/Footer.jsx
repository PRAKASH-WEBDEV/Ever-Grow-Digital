import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineArrowUp,
} from "react-icons/hi";

import logo2 from "../../assets/logo-2.png";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      {/* BACKGROUND */}

      <div className="footer-bg" />

      <div className="footer-grid-bg" />

      <div className="footer-blur-left" />

      <div className="footer-blur-right" />

      <div className="container-custom relative z-10">
        {/* =========================================
            TOP GRID
        ========================================= */}

        <div className="footer-top-grid">
          {/* BRAND */}

          <div>
            <Link to="/">
              <img
                src={logo2}
                alt="EverGrow Digital"
                className="footer-logo"
              />
            </Link>

            <p className="footer-tagline">
              Digital Growth Partner
            </p>

            <p className="footer-text mt-6">
              EverGrow Digital helps startups,
              brands and businesses grow with
              premium websites, SEO strategies,
              branding and digital marketing
              solutions.
            </p>

            {/* SOCIAL */}

            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="footer-heading">
              Quick Links
            </h3>

            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/blog">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="footer-heading">
              Services
            </h3>

            <ul className="footer-links">
              <li>Web Development</li>

              <li>SEO Optimization</li>

              <li>Digital Marketing</li>

              <li>Graphics Designing</li>

              <li>Video Editing</li>

              <li>Branding Strategy</li>
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="footer-heading">
              Contact Info
            </h3>

            <div className="footer-contact-list">
              {/* LOCATION */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <HiOutlineLocationMarker />
                </div>

                <p className="footer-text">
                  Ghaziabad, Uttar Pradesh,
                  India
                </p>
              </div>

              {/* PHONE */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <HiOutlinePhone />
                </div>

                <a
                  href="tel:+919876543210"
                  className="footer-contact-link"
                >
                  +91 9876543210
                </a>
              </div>

              {/* EMAIL */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <HiOutlineMail />
                </div>

                <a
                  href="mailto:hello@evergrowdigital.com"
                  className="footer-contact-link"
                >
                  hello@evergrowdigital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            CTA
        ========================================= */}

        <div className="footer-cta">
          {/* LEFT */}

          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              🚀
            </div>

            <div>
              <h3 className="footer-heading">
                Let’s Grow Together
              </h3>

              <p className="footer-text mt-3">
                Ready to scale your business
                online? Let’s build something
                powerful together.
              </p>
            </div>
          </div>

          {/* BUTTON */}

          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="footer-btn"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* NEWSLETTER */}

          <div>
            <h3 className="footer-heading mb-5">
              Subscribe Newsletter
            </h3>

            <div className="footer-newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />

              <button className="footer-submit-btn">
                ➜
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 EverGrow Digital.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

            <Link to="/cookies">
              Cookie Policy
            </Link>
          </div>

          {/* SCROLL */}

          <button
            onClick={scrollTop}
            className="footer-scroll-btn"
          >
            <HiOutlineArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;