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
                  <a
                    title="Web Development Course"
                    href="/online-training/web-development-training"
                  >
                    Web Development Course
                  </a>
                </li>
                <li>
                  <a title="WordPress Course" href="/online-training/wordpress-training">WordPress Course</a>
                </li>
                <li>
                  <a title="MERN Stack Course"href="/online-training/mern-stack-training">MERN Stack Course</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Professional Training</p>
              </div>
              <ul class="list-unstyled">
                <li>
                  <a title="Data Science Course" href="/online-training/data-science-training">Data Science Course</a>
                </li>
                <li>
                  <a title="Data Analytics Course" href="/online-training/data-analytics-training">Data Analytics Course</a>
                </li>
                <li>
                  <a title="Python Course" href="/online-training/python-training">Python Course</a>
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
                  <a title="Web Development Course" href="/online-training/android-app-development-training">
                    Android App Development Course
                  </a>
                </li>
                <li>
                  <a title="WordPress Course" href="/online-training/flutter-app-development-training">Flutter App Development Course</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.megaMenuList} mb-3`}>
              <div className={styles.listHeading}>
                <p className="border-bottom py-3 m-0">Cyber Security</p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a title="Ethical Hacking Course" href="/online-training/ethical-hacking-training">Ethical Hacking Course</a>
                </li>
                <li>
                  <a title="Penetration Testing Course" href="/online-training/penetration-testing-training">
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
                  <a title="SEO Course" href="/online-training/seo-training">SEO Course</a>
                </li>
                <li>
                  <a title="Digital Marketing Course" href="/online-training/digital-marketing-training">
                    Digital Marketing Course
                  </a>
                </li>
                <li>
                  <a title="Content Writing Course" href="/online-training/content-writing-training">Content Writing Course</a>
                </li>
                <li>
                  <a title="Full Online Ads Course" href="/online-training/online-advertising-training">Full Online Ads Course</a>
                </li>
                <li>
                  <a title="YouTube Course" href="/online-training/web-development-training">YouTube Course</a>
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
