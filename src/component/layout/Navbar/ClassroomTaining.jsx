import styles from "./Navbar.module.css";
import { useState } from "react";

const OnlineTraining = () => {
  const [hovered, setHovered] = useState(false);
  const [center, setCenter] = useState("Ghaziabad");

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
            <li
              className={`${
                styles.subMenu
              } d-flex justify-content-around align-items-center cursor-pointer label-color-1 border-bottom ${
                center === "Ghaziabad" ? styles.active : ""
              }`}
              onMouseEnter={() => setCenter("Ghaziabad")}
            >
              Ghaziabad{" "}
              <span className="ms-1 fs-13 arrow-right d-lg-block d-none">
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
            <li
              className={`${
                styles.subMenu
              } d-flex justify-content-around align-items-center cursor-pointer label-color-1 border-bottom ${
                center === "Lajpat Nagar" ? styles.active : ""
              }`}
              onMouseEnter={() => setCenter("Lajpat Nagar")}
            >
              Lajpat Nagar{" "}
              <span className="ms-1 fs-13 arrow-right d-lg-block d-none">
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
          </ul>
          <div
            className={`${styles.showSubMenu} w-100 ps-3 pd-md-3 ${
              center === "Ghaziabad" ? styles.active : ""
            }`}
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
                        href="https://www.wscubetech.com/web-development-training-certification-course-jodhpur.html"
                        title="Website Development Course"
                      >
                        Website Development Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/wordpress-training-course-jodhpur.html"
                        title="Wordpress Course"
                      >
                        Wordpress Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/php-training-certification-course-jodhpur.html"
                        title="PHP Course"
                      >
                        PHP Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/javascript-training-certification-course-jodhpur.html"
                        title="JavaScript Course"
                      >
                        JavaScript Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/bootstrap-training-certification-course-jodhpur.html"
                        title="Bootstrap Course"
                      >
                        Bootstrap Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/laravel-training-jodhpur.html"
                        title="Laravel Course"
                      >
                        Laravel Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/nodejs-development-training-certification-jodhpur.html"
                        title="Node JS Course"
                      >
                        Node JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/angularjs-development-training-certification-jodhpur.html"
                        title="Angular JS Course "
                      >
                        Angular JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/reactjs-training-course-jodhpur.html"
                        title="React JS Course"
                      >
                        React JS Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/mern-stack-training-jodhpur.html"
                        title="Mern Stack Training Jodhpur"
                      >
                        Mern Stack Course
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
                        href="https://www.wscubetech.com/python-training-jodhpur.html"
                        title="Python Course"
                      >
                        Python Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/java-j2se-training-certification-course-jodhpur.html"
                        title="Java Course"
                      >
                        Java Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/c-programming-development-training-certification-jodhpur.html"
                        title="C Programming Course"
                      >
                        C Programming Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/cpp-programming-development-training-certification-jodhpur.html"
                        title="C++ Programming Course"
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
                      <a
                        href="https://www.wscubetech.com/seo-training-course-jodhpur.html"
                        title="SEO Course"
                      >
                        SEO Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/digital-marketing-course-jodhpur.html"
                        title="Digital Marketing Course"
                      >
                        Digital Marketing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/content-writing-course-jodhpur.html"
                        title="Content Writing Course"
                      >
                        Content Writing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/google-ads-training-course-jodhpur.html"
                        title="Google Ads Course"
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
                        href="https://www.wscubetech.com/android-development-training-jodhpur.html"
                        title="Android App Development Course"
                      >
                        Android App Development Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/flutter-training-course-jodhpur.html"
                        title="Flutter App Development Course"
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
                        href="https://www.wscubetech.com/data-science-training-course-jodhpur.html"
                        title="Data Science Course"
                      >
                        Data Science Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/graphic-designing-course-jodhpur.html"
                        title="Graphic Designing Course"
                      >
                        Graphic Designing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/data-analytics-course-jodhpur.html"
                        title="Data Analytics Course "
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
                        href="https://www.wscubetech.com/ethical-hacking-course-jodhpur.html"
                        title="Ethical Hacking Course"
                      >
                        Ethical Hacking Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/penetration-testing-course-jodhpur.html"
                        title="Penetration Testing Course"
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
            }`}
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
                        href="https://www.wscubetech.com/web-development-course-jaipur.html"
                        title="Web Development Course "
                      >
                        Web Development Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/mern-stack-development-course-jaipur.html"
                        title="MERN Stack Course "
                      >
                        MERN Stack Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/web-designing-course-jaipur.html"
                        title="Web Designing Course "
                      >
                        Web Designing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/laravel-training-jaipur.html"
                        title="Laravel Training"
                      >
                        {" "}
                        Laravel Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/reactjs-training-jaipur.html"
                        title=" ReactJs Training"
                      >
                        {" "}
                        ReactJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/php-training-jaipur.html"
                        title="PHP  Training"
                      >
                        {" "}
                        PHP Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/angularjs-training-jaipur.html"
                        title="AngularJs Training"
                      >
                        {" "}
                        AngularJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/nodejs-training-jaipur.html"
                        title="NodeJs Training"
                      >
                        {" "}
                        NodeJs Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/javascript-training-jaipur.html"
                        title="Javascript Training"
                      >
                        {" "}
                        Javascript Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/html-training-jaipur.html"
                        title="HTML Training"
                      >
                        {" "}
                        HTML Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/wordpress-training-course-jaipur.html"
                        title="Wordpress Training"
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
                        href="https://www.wscubetech.com/python-training-course-jaipur.html"
                        title="Python Course"
                      >
                        {" "}
                        Python Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/java-training-jaipur.html"
                        title="Java Course"
                      >
                        Java Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/c-language-course-jaipur.html"
                        title="C Programming Course"
                      >
                        C Programming Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/cpp-course-jaipur.html"
                        title="C++ Programming Course"
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
                      <a
                        href="https://www.wscubetech.com/seo-course-jaipur.html"
                        title="SEO Course"
                      >
                        SEO Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/digital-marketing-course-jaipur.html"
                        title="Digital Marketing Course"
                      >
                        Digital Marketing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/social-media-marketing-course-jaipur.html"
                        title="Social Media Course"
                      >
                        {" "}
                        Social Media Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/google-ads-training-course-jaipur.html"
                        title="Google Ads Course"
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
                        href="https://www.wscubetech.com/data-analytics-course-jaipur.html"
                        title="Data Analytics Course"
                      >
                        Data Analytics Course{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/graphic-designing-course-jaipur.html"
                        title="Graphic Designing Course"
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
                        href="https://www.wscubetech.com/penetration-testing-course-jaipur.html"
                        title="Penetration Testing Course"
                      >
                        Penetration Testing Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wscubetech.com/ethical-hacking-course-jaipur.html"
                        title="Ethical Hacking Course"
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

export default OnlineTraining;
