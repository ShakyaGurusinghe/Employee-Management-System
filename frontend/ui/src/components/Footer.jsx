/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Workify Employee Management</h5>
            <p>
            Empowering organizations to manage their workforce with ease and efficiency. Our mission is to simplify employee management, streamline processes, and foster a culture of productivity and collaboration. Designed with care, built for success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#manage" className="text-light text-decoration-none">
                  Manage Employees
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Contact</h5>
            <p>
              <i className="bi bi-telephone-fill"></i> +94 112397456
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> support@workify.com
            </p>
            <div className="mt-3">
              <a
                href="https://facebook.com"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Workify Employee Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
