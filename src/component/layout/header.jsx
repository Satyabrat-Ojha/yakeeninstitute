import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "+91 96310 05476";
const address = "C-73, Shaliamar Garden, Ghaziabad";

let socialList = [
  {
    iconName: "icofont-facebook-messenger",
    siteLink: "#",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
  },
  {
    iconName: "icofont-vimeo",
    siteLink: "#",
  },
  {
    iconName: "icofont-skype",
    siteLink: "#",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "https://www.linkedin.com/company/yakeen-institute/",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> {address}
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on : </p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/01.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Courses
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/course">Course</NavLink>
                      </li>
                      <li>
                        <NavLink to="/course-single">Course Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/course-view">Course View</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Services
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/contact">Classroom Training</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Online Training</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Summer Internship</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Winter Internship</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Corporate Training</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Industrial Training</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">College Campus Training</NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <a
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-bs-offset="0,0"
                    >
                      Blog
                    </a>
                    <ul className="lab-ul dropdown-menu">
                      <li>
                        <NavLink to="/blog">Blog Grid</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-2">Blog Style 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-3">Blog Style 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-single">Blog Single</NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              <Link to="/login" className="login">
                <i className="icofont-user"></i> <span>LOG IN</span>{" "}
              </Link>
              <Link to="/signup" className="signup">
                <i className="icofont-users"></i> <span>SIGN UP</span>{" "}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
