import styles from "./Navbar.module.css";
import { useState } from "react";

const OurCenters = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${styles.navItem} position-relative mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        Our Centers{" "}
        <img src="https://www.wscubetech.com/images/up-arrow.svg" alt="arrow" />
      </a>
      <div
        className={`${styles.mainMegaMenu} ${hovered ? styles.active : ""} ${
          styles.smallMenu
        } position-fixed bg-white mx-md-auto pb-3 border-bottom`}
      >
        <div className={styles.megaMenuList}>
          <ul className={`list-unstyled ${styles.smallList}`}>
            <li>
              <a className="text-left">Ghaziabad</a>
            </li>
            <li>
              <a className="text-left">Lajpat Nagar</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OurCenters;
