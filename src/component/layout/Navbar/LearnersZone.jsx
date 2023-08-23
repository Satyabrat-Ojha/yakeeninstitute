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
        Learners Zone <img src={UpArrow} alt="arrow" />
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
                <p className="border-bottom py-3 m-0">Interview Questions</p>
              </div>
              <ul className={`${styles.largeList} list-unstyled`}>
                <li>
                  <a>HTML</a>
                </li>
                <li>
                  <a>SEO</a>
                </li>
                <li>
                  <a>PHP</a>
                </li>
                <li>
                  <a>HTML5</a>
                </li>
                <li>
                  <a>CSS</a>
                </li>
                <li>
                  <a>CSS3</a>
                </li>
                <li>
                  <a>JAVASCRIPT</a>
                </li>
                <li>
                  <a>ANDROID</a>
                </li>
                <li>
                  <a>MYSQL</a>
                </li>
                <li>
                  <a>JQUERY</a>
                </li>
                <li>
                  <a>C</a>
                </li>
                <li>
                  <a>CPP</a>
                </li>
                <li>
                  <a>Content Writing</a>
                </li>
                <li>
                  <a>ReactJS</a>
                </li>
                <li>
                  <a>Django</a>
                </li>
                <li>
                  <a>Python</a>
                </li>
                <li>
                  <a>Digital Marketing</a>
                </li>
                <li>
                  <a>Email Marketing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                  Quiz Test / Online Free Test
                </p>
              </div>
              <ul className={`${styles.largeList} list-unstyled`}>
                <li>
                  <a>HTML</a>
                </li>
                <li>
                  <a>SEO</a>
                </li>
                <li>
                  <a>PHP</a>
                </li>
                <li>
                  <a>HTML5</a>
                </li>
                <li>
                  <a>CSS</a>
                </li>
                <li>
                  <a>CSS3</a>
                </li>
                <li>
                  <a>JAVASCRIPT</a>
                </li>
                <li>
                  <a>ANDROID</a>
                </li>
                <li>
                  <a>MYSQL</a>
                </li>
                <li>
                  <a>JQUERY</a>
                </li>
                <li>
                  <a>C</a>
                </li>
                <li>
                  <a>CPP</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                  Internship
                </p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="BCA Internship">BCA Internship </a>
                </li>
                <li>
                  <a title="MCA Internship">MCA Internship</a>
                </li>
                <li>
                  <a title="BSc Internship">BSc Internship</a>
                </li>
                <li>
                  <a title="MSc Internship">MSc Internship</a>
                </li>
                <li>
                  <a title="BTech Internship">BTech Internship </a>
                </li>
                <li>
                  <a title="Polytechnic Internship">Polytechnic Internship</a>
                </li>
                <li>
                  <a title="Summer Training">Summer Training</a>
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
