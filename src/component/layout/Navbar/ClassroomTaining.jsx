import styles from "./Navbar.module.css";
import { useState } from "react";

const OnlineTraining = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${styles.navItem} mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        Classroom Training{" "}
        <img src="https://www.wscubetech.com/images/up-arrow.svg" alt="arrow" />
      </a>
      <div
        className={`${styles.mainMegaMenu} ${
          hovered ? styles.active : ""
        } position-fixed bg-white w-100 start-0 end-0 mx-auto pe-lg-4`}
      >
        <div className={`${styles.menuNavTabs} d-lg-flex`}>
          <ul
            className={`${styles.navTabsButton} d-flex flex-column list-unstyled border-end`}
          >
            <li class="sub-menu d-flex justify-content-around align-items-center cursor-pointer label-color-1 border-bottom active">
              Ghaziabad{" "}
              <span class="ms-1 fs-13 arrow-right d-lg-block d-none">
                <i class="fas fa-chevron-right"></i>
              </span>
            </li>
            <li class="sub-menu d-flex justify-content-around align-items-center cursor-pointer label-color-1 border-bottom active">
              Lajpat Nagar{" "}
              <span class="ms-1 fs-13 arrow-right d-lg-block d-none">
                <i class="fas fa-chevron-right"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default OnlineTraining;
