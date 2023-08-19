import styles from "./Navbar.module.css";
import { useState } from "react";
import logo from "../../../logo.svg";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a className={`${styles.brand} me-xl-4 me-3`} href="/">
            <img src={logo} alt="logo" width={80} />
          </a>
          <button
            className={`${styles.navbarToggler} border-0 p-0 shadow-none ${
              isOpen ? "" : "collapsed"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="https://www.wscubetech.com/images/menubar-icon.svg"
              width="35"
              height="35"
              alt="Menu"
              className={`${styles.imgFluid} open-icon ${
                isOpen ? "d-none" : ""
              }`}
            />
            <img
              src="https://www.wscubetech.com/images/close-menu.svg"
              width="25"
              height="25"
              alt="Menu"
              className={`${styles.imgFluid} close-icon ${
                isOpen ? "" : "d-none"
              }`}
            />
          </button>
          <div
            className={`${styles.navbarCollapse} ${isOpen ? styles.show : ""}`}
          >
            <ul
              className={`${styles.navbarNav} me-auto mb-2 mb-lg-0 ${styles.wsMainMenu}`}
            >
              <li class={`${styles.navItem} position-relative mx-lg-1`}>
                <a href="/" className={styles.navLink}>
                  Home
                </a>
              </li>
              <li
                class={`${styles.navItem} position-relative mx-lg-1`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <a href="/course" className={styles.navLink}>
                  {"Courses "}
                  <img
                    src="https://www.wscubetech.com/images/up-arrow.svg"
                    alt="arrow"
                  />
                </a>
                <div
                  className={`${styles.mainMegaMenu} ${
                    hovered ? styles.active : ""
                  } position-fixed bg-white w-100 start-0 end-0 mx-auto px-4 pb-4 border-bottom`}
                >
                  <div className="row pb-3 pb-lg-0">
                    <div className="col-lg-4">
                      <div className={`${styles.megaMenuList} mb-3`}>
                        <div className={styles.listHeading}>
                          <p className="border-bottom py-3 m-0">
                            Web Development
                          </p>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" title="Web Development Course">
                              Web Development Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="WordPress Course">
                              WordPress Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="MERN Stack Course">
                              MERN Stack Course
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.megaMenuList} mb-3`}>
                        <div className={styles.listHeading}>
                          <p className="border-bottom py-3 m-0">
                            Professional Training
                          </p>
                        </div>
                        <ul class="list-unstyled">
                          <li>
                            <a href="#" title="Data Science Course">
                              Data Science Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Data Analytics Course">
                              Data Analytics Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Python Course">
                              Python Course
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={`${styles.megaMenuList} mb-3`}>
                        <div className={styles.listHeading}>
                          <p className="border-bottom py-3 m-0">
                            App Development
                          </p>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" title="Web Development Course">
                              Web Development Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="WordPress Course">
                              WordPress Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="MERN Stack Course">
                              MERN Stack Course
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className={`${styles.megaMenuList} mb-3`}>
                        <div className={styles.listHeading}>
                          <p className="border-bottom py-3 m-0">
                            Cyber Security
                          </p>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" title="Ethical Hacking Course">
                              Ethical Hacking Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Penetration Testing Course">
                              Penetration Testing Course
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={`${styles.megaMenuList} mb-3`}>
                        <div className={styles.listHeading}>
                          <p className="border-bottom py-3 m-0">
                            Digital Marketing
                          </p>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" title="SEO Course">
                              SEO Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Digital Marketing Course">
                              Digital Marketing Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Content Writing Course">
                              Content Writing Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Full Online Ads Course">
                              Full Online Ads Course
                            </a>
                          </li>
                          <li>
                            <a href="#" title="YouTube Course">
                              YouTube Course
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li class={`${styles.navItem} position-relative mx-lg-1`}>
                <a href="/instructor" className={styles.navLink}>
                  Instructor
                </a>
              </li> */}
              <li class={`${styles.navItem} position-relative mx-lg-1`}>
                <a href="/about" className={styles.navLink}>
                  About
                </a>
              </li>
              <li class={`${styles.navItem} position-relative mx-lg-1`}>
                <a href="/contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="d-lg-flex d-none">
            <a
              href="/admission"
              class={`btn shadow-none me-2 ${styles.admissionBtn}`}
            >
              {" "}
              Admission Now
            </a>
            <a class={`btn shadow-none ${styles.signInBtn}`} href="/login">
              Sign In
            </a>
          </div>
          <div
            className={
              !isOpen
                ? "d-none"
                : `position-fixed w-100 h-100 overflow-hidden ${styles.menuBackdrop} left-0`
            }
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
