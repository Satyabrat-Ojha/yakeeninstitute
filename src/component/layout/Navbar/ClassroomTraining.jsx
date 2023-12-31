import styles from "./Navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import UpArrow from "./UpArrow.svg";

const ClassroomTraining = () => {
  const [hovered, setHovered] = useState(false);
  const [center, setCenter] = useState("Ghaziabad");
  const [hidden, setHidden] = useState(true);

  return (
    <li
      className={`${styles.navItem} mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        Classroom Training <img src={UpArrow} alt="arrow" />
      </a>
      <div
        className={`${styles.mainMegaMenu} ${
          hovered ? styles.active : ""
        } position-fixed bg-white w-100 start-0 end-0 mx-md-auto pe-lg-4`}
      >
        <div className={`${styles.menuNavTabs} d-lg-flex`}>
          <ul
            className={`${styles.navTabsButton} d-flex flex-column list-unstyled border-end`}
          >
            <li
              className={`${
                styles.subMenu
              } d-flex justify-content-between align-items-center cursor-pointer label-color-1 border-bottom ${
                center === "Ghaziabad" ? styles.active : ""
              }`}
              onMouseEnter={() => setCenter("Ghaziabad")}
              onClick={() => setHidden(false)}
            >
              Ghaziabad{" "}
              <span className={`ms-1 ${styles.arrowRight} d-lg-block d-none`}>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </li>
            <li
              className={`${
                styles.subMenu
              } d-flex justify-content-between align-items-center cursor-pointer label-color-1 border-bottom ${
                center === "Lajpat Nagar" ? styles.active : ""
              }`}
              onMouseEnter={() => setCenter("Lajpat Nagar")}
              onClick={() => setHidden(false)}
            >
              Lajpat Nagar{" "}
              <span className={`ms-1 ${styles.arrowRight} d-lg-block d-none`}>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </li>
          </ul>
          <div
            className={`${styles.showSubMenu} w-100 ps-3 pd-md-3 ${
              center === "Ghaziabad" ? styles.active : ""
            } ${hidden ? styles.hidden : ""}`}
          >
            <div className="row pb-0 pb-lg-3">
              <div className="col-lg-4">
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 m-0">
                      CMS &amp; Web Technologies
                    </p>
                  </div>
                  <ul className="list-unstyled ">
                    <li>
                      <a
                        title="Website Development Course"
                        href="/ghaziabad/web-development-training"
                      >
                        Website Development Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Wordpress Course"
                        href="/ghaziabad/wordpress-training"
                      >
                        Wordpress Course
                      </a>
                    </li>
                    <li>
                      <a title="PHP Course" href="/ghaziabad/php-training">
                        PHP Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="JavaScript Course"
                        href="/ghaziabad/javascript-training"
                      >
                        JavaScript Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Bootstrap Course"
                        href="/ghaziabad/bootstrap-training"
                      >
                        Bootstrap Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Laravel Course"
                        href="/ghaziabad/laravel-training"
                      >
                        Laravel Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Node JS Course"
                        href="/ghaziabad/nodejs-training"
                      >
                        Node JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Angular JS Course "
                        href="/ghaziabad/angularjs-training"
                      >
                        Angular JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="React JS Course"
                        href="/ghaziabad/reactjs-training"
                      >
                        React JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Mern Stack Training Jodhpur"
                        href="/ghaziabad/mern-stack-training"
                      >
                        MERN Stack Course
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 m-0">Programming</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Python Course"
                        href="/ghaziabad/python-training"
                      >
                        Python Course
                      </a>
                    </li>
                    <li>
                      <a title="Java Course" href="/ghaziabad/java-training">
                        Java Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="C Programming Course"
                        href="/ghaziabad/c-programming-training"
                      >
                        C Programming Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="C++ Programming Course"
                        href="/ghaziabad/c++-training"
                      >
                        C++ Programming Course
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 m-0">Digital Marketing</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a title="SEO Course" href="/ghaziabad/seo-training">
                        SEO Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Digital Marketing Course"
                        href="/ghaziabad/digital-marketing-training"
                      >
                        Digital Marketing Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Content Writing Course"
                        href="/ghaziabad/content-writing-training"
                      >
                        Content Writing Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Google Ads Course"
                        href="/ghaziabad/google-ads-training"
                      >
                        Google Ads Course
                      </a>
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
                      <a
                        title="Android App Development Course"
                        href="/ghaziabad/android-app-development-training"
                      >
                        Android App Development Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Flutter App Development Course"
                        href="/ghaziabad/flutter-app-development-training"
                      >
                        Flutter App Development Course
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
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Data Science Course"
                        href="/ghaziabad/data-science-training"
                      >
                        Data Science Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Graphic Designing Course"
                        href="/ghaziabad/graphic-designing-training"
                      >
                        Graphic Designing Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Data Analytics Course "
                        href="/ghaziabad/data-analytics-training"
                      >
                        Data Analytics Course{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 m-0">Cybersecurity</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Ethical Hacking Course"
                        href="/ghaziabad/ethical-hacking-training"
                      >
                        Ethical Hacking Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Penetration Testing Course"
                        href="/ghaziabad/penetration-testing-training"
                      >
                        Penetration Testing Course
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.showSubMenu} w-100 ps-3 pd-md-3 ${
              center === "Lajpat Nagar" ? styles.active : ""
            } ${hidden ? styles.hidden : ""}`}
          >
            <div className="row pb-0 pb-lg-3">
              <div className="col-lg-4">
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                      CMS &amp; Web Technologies
                    </p>
                  </div>
                  <ul className="list-unstyled ">
                    <li>
                      <a
                        title="Web Development Course "
                        href="/lajpat-nagar/web-development-training"
                      >
                        Web Development Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title="MERN Stack Course "
                        href="/lajpat-nagar/mern-stack-training"
                      >
                        MERN Stack Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title="Web Designing Course "
                        href="/lajpat-nagar/web-development-training"
                      >
                        Web Designing Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Laravel Training"
                        href="/lajpat-nagar/laravel-training"
                      >
                        {" "}
                        Laravel Training
                      </a>
                    </li>
                    <li>
                      <a
                        title=" ReactJs Training"
                        href="/lajpat-nagar/reactjs-training"
                      >
                        {" "}
                        ReactJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        title="PHP  Training"
                        href="/lajpat-nagar/php-training"
                      >
                        {" "}
                        PHP Training
                      </a>
                    </li>
                    <li>
                      <a
                        title="AngularJs Training"
                        href="/lajpat-nagar/angularjs-training"
                      >
                        {" "}
                        AngularJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        title="NodeJs Training"
                        href="/lajpat-nagar/nodejs-training"
                      >
                        {" "}
                        NodeJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        title="Javascript Training"
                        href="/lajpat-nagar/javascript-training"
                      >
                        {" "}
                        Javascript Training
                      </a>
                    </li>
                    <li>
                      <a title="HTML Training"> HTML Training</a>
                    </li>
                    <li>
                      <a
                        title="Wordpress Training"
                        href="/lajpat-nagar/wordpress-training"
                      >
                        {" "}
                        Wordpress Training
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                      Programming
                    </p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Python Course"
                        href="/lajpat-nagar/python-training"
                      >
                        {" "}
                        Python Course
                      </a>
                    </li>
                    <li>
                      <a title="Java Course" href="/lajpat-nagar/java-training">
                        Java Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="C Programming Course"
                        href="/lajpat-nagar/c-programming-training"
                      >
                        C Programming Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="C++ Programming Course"
                        href="/lajpat-nagar/c++-training"
                      >
                        C++ Programming Course
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                      Digital Marketing
                    </p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a title="SEO Course" href="/lajpat-nagar/seo-training">
                        SEO Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Digital Marketing Course"
                        href="/lajpat-nagar/digital-marketing-training"
                      >
                        Digital Marketing Course
                      </a>
                    </li>
                    <li>
                      <a title="Social Media Course"> Social Media Course</a>
                    </li>
                    <li>
                      <a
                        title="Google Ads Course"
                        href="/lajpat-nagar/google-ads-training"
                      >
                        {" "}
                        Google Ads Course{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                      Professional Training
                    </p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Data Analytics Course"
                        href="/lajpat-nagar/data-analytics-training"
                      >
                        Data Analytics Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        title="Graphic Designing Course"
                        href="/lajpat-nagar/graphic-designing-training"
                      >
                        Graphic Designing Course{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.megaMenuList} mb-3`}>
                  <div className={styles.listHeading}>
                    <p className="border-bottom py-3 fs-18 fw-500 label-color-2 m-0">
                      Cybersecurity
                    </p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        title="Penetration Testing Course"
                        href="/lajpat-nagar/penetration-testing-training"
                      >
                        Penetration Testing Course
                      </a>
                    </li>
                    <li>
                      <a
                        title="Ethical Hacking Course"
                        href="/lajpat-nagar/ethical-hacking-training"
                      >
                        {" "}
                        Ethical Hacking Course
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ClassroomTraining;
