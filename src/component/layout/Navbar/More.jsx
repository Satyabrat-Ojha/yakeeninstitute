import styles from "./Navbar.module.css";
import { useState } from "react";
import UpArrow from "./UpArrow.svg";

const OurCenters = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${styles.navItem} position-relative mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        More <img src={UpArrow} alt="arrow" />
      </a>
      <div
        className={`${styles.mainMegaMenu} ${hovered ? styles.active : ""} ${
          styles.smallMenu
        } position-fixed bg-white mx-md-auto pb-3 border-bottom`}
      >
        <div className={styles.megaMenuList}>
          <ul className={`list-unstyled ${styles.smallList}`}>
            <li>
              <a className="text-left" href="/about">
                About Us
              </a>
            </li>
            <li>
              <a className="text-left">Blog</a>
            </li>
            <li>
              <a className="text-left">We Are Hiring</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OurCenters;
