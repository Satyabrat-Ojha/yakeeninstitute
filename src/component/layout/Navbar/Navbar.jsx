import styles from "./Navbar.module.css";
import { useState } from "react";
import logo from "../../../logo.svg";
import ClassroomTraining from "./ClassroomTraining";
import OnlineTraining from "./OnlineTraining";
import OurCenters from "./OurCenters";
import LearnersZone from "./LearnersZone";
import More from "./More";

const Navbar = () => {
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
              <ClassroomTraining />
              <OnlineTraining />
              <li
                class={`${styles.navItem} position-relative mx-lg-1 d-lg-none`}
              >
                <a href="/admission" className={styles.navLink}>
                  Offline Admission
                </a>
              </li>
              <OurCenters />
              <LearnersZone />
              <More />
            </ul>
          </div>
          <div class="d-lg-flex d-none">
            <a
              href="/admission"
              class={`btn shadow-none me-2 ${styles.admissionBtn}`}
            >
              {" "}
              Offline Admission
            </a>
            <a class={`btn shadow-none ${styles.signInBtn}`} href="/contact">
              Reach us
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
