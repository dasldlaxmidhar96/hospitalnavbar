import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className="care-prime">
        <div className="container-custom">
          <div className="headermain-bar">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-1 col-sm-2 col-2">
                <div className="care-brand">
                  <Link to="https://www.carehospitals.com/">
                    <img
                      className="img-fluid carebrand-img"
                      src="https://www.carehospitals.com/assets/images/care-hospital-logo.svg"
                      alt="CARE Hospitals Logo"
                      width="80"
                      height="66"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-11 col-sm-10 col-10">
                <ul className="nav justify-content-end flm-nav firstline-menu">
                  <li className="nav-item flm-li">
                    <Link className="nav-link flm-a" to="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item flm-li">
                    <Link
                      className="nav-link flm-a"
                      to="/international-patients"
                    >
                      International Patients
                    </Link>
                  </li>
                  <li className="nav-item flm-li mb-1">
                    <Link
                      className="nav-link flm-a flm-pay-online"
                      to="/payonline"
                    >
                      Pay Online
                    </Link>
                  </li>
                  <li className="nav-item flm-li">
                    <Link className="nav-link flm-a" to="/labreports">
                      Online Lab Reports
                    </Link>
                  </li>
                  <li className="nav-item flm-li">
                    <Link className="nav-link flm-a" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item flm-li">
                    <Link className="nav-link flm-a" to="/enquiry">
                      Enquire Now
                    </Link>
                  </li>
                  <li className="nav-item flm-li flm-li-feedback">
                    <Link className="nav-link flm-a" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                  <li className="nav-item flm-li flm-li-call">
                    <Link className="nav-link flm-a" to="tel:+91-40 6165 6565">
                      <span>
                        <img
                          src="https://www.carehospitals.com/assets/images/main/ch-phoneicon.svg"
                          alt=""
                        />
                      </span>
                      <span id="header2-phone">+91-40 5656 9696</span>
                    </Link>
                  </li>
                  <li
                    className="nav-item h1-nav-search flm-li"
                    id="h2navsearch"
                  >
                    <div>
                      <img
                        src="https://www.carehospitals.com/assets/images/icon-svg/search.svg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nav-item h2-nav-menu-icon ms-3 flm-li dropdown menu-treat">
                    <span
                      data-bs-toggle="offcanvas"
                      data-bs-target="#halfsidebar1"
                    >
                      <div className="header-hamburger carehome-sprite sprite-hamburger"></div>
                    </span>
                  </li>
                </ul>
                <ul className="nav justify-content-end slm-nav secondline-menu">
                  <li className="nav-item slm-li">
                    <Link to="/doctors" className="nav-link slm-a">
                      <div className="second-menublock">
                        <div className="secondimg-container">
                          <div className="secondary-lineicon carehome-sprite sprite-doc-img"></div>
                        </div>
                        <span className="secondary-line-text">Doctors</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item slm-li  special-treat">
                    <Link
                      to="/specialist"
                      className="nav-link slm-a  external-link"
                      data-bs-auto-close="true"
                      aria-expanded="false"
                    >
                      <div className="second-menublock">
                        <div className="secondimg-container">
                          <div className="secondary-lineicon carehome-sprite sprite-doc-stech"></div>
                        </div>
                        <span className="secondary-line-text">
                          Specialities &amp; Treatments
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item slm-li">
                    <Link to="/hospitaldir" className="nav-link slm-a">
                      <div className="second-menublock">
                        <div className="secondimg-container">
                          <div className="secondary-lineicon carehome-sprite sprite-doc-img"></div>
                        </div>
                        <span className="secondary-line-text">
                          Hospitals &amp; Directions
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item slm-li">
                    <Link to="/appointment" className="nav-link slm-a">
                      <div className="second-menublock">
                        <div className="secondimg-container">
                          <div className="secondary-lineicon carehome-sprite sprite-doc-img"></div>
                        </div>
                        <span className="secondary-line-text">
                          Book an Appointment
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item slm-li">
                    <Link to="/contactus" className="nav-link slm-a">
                      <div className="second-menublock">
                        <div className="secondimg-container">
                          <div className="secondary-lineicon carehome-sprite sprite-doc-img"></div>
                        </div>
                        <span className="secondary-line-text">Contact Us</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
