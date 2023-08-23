import styles from "./Navbar.module.css";
import { useState } from "react";
import UpArrow from "./UpArrow.svg";

const OnlineTraining = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${styles.navItem} position-relative mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        Online Training <img src={UpArrow} alt="arrow" />
      </a>
      <div
        className={`${styles.mainMegaMenu} ${
          hovered ? styles.active : ""
        } position-fixed bg-white w-100 start-0 end-0 mx-md-auto px-md-4 pb-4 border-bottom`}
      >
        <div className="row pb-3 pb-lg-0">
          <div className="col-lg-4">
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Web Development</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="Web Development Course">Web Development Course</a>
                </li>
                <li>
                  <a title="WordPress Course">WordPress Course</a>
                </li>
                <li>
                  <a title="MERN Stack Course">MERN Stack Course</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Professional Training</p>
              </div>
              <ul class="list-unstyled">
                <li>
                  <a title="Data Science Course">Data Science Course</a>
                </li>
                <li>
                  <a title="Data Analytics Course">Data Analytics Course</a>
                </li>
                <li>
                  <a title="Python Course">Python Course</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">App Development</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="Web Development Course">
                    Android App Development Course
                  </a>
                </li>
                <li>
                  <a title="WordPress Course">Flutter App Development Course</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Cyber Security</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="Ethical Hacking Course">Ethical Hacking Course</a>
                </li>
                <li>
                  <a title="Penetration Testing Course">
                    Penetration Testing Course
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Digital Marketing</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="SEO Course">SEO Course</a>
                </li>
                <li>
                  <a title="Digital Marketing Course">
                    Digital Marketing Course
                  </a>
                </li>
                <li>
                  <a title="Content Writing Course">Content Writing Course</a>
                </li>
                <li>
                  <a title="Full Online Ads Course">Full Online Ads Course</a>
                </li>
                <li>
                  <a title="YouTube Course">YouTube Course</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OnlineTraining;
