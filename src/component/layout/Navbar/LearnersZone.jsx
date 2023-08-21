import styles from "./Navbar.module.css";
import { useState } from "react";

const OnlineTraining = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${styles.navItem} position-relative mx-lg-1`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a className={styles.navLink}>
        Learners Zone{" "}
        <img src="https://www.wscubetech.com/images/up-arrow.svg" alt="arrow" />
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
                  <a href="https://www.wscubetech.com/blog/html-interview-questions-answers/">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/seo-interview-questions/">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/php-interview-questions-answers/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/interview-question-html5">
                    HTML5
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/css-interview-questions-answers">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/interview-question-css3">
                    CSS3
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/javascript-interview-questions/">
                    JAVASCRIPT
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/interview-question-android">
                    ANDROID
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/mysql-interview-questions-answers/">
                    MYSQL
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/interview-question-jquery">
                    JQUERY
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/c-programming-interview-questions-answers/">
                    C
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/interview-question-cpp">
                    CPP
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/content-writing-interview-questions-answers/">
                    Content Writing
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/reactjs-interview-questions-answers/">
                    ReactJS
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/top-65-django-interview-questions-and-answers/">
                    Django
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/python-interview-questions-and-answers/">
                    Python
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/digital-marketing-interview-questions-answers/">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/blog/top-email-marketing-interview-questions-answers/">
                    Email Marketing
                  </a>
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
                  <a href="https://www.wscubetech.com/quiz-test-html">HTML</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-seo">SEO</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-php">PHP</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-html5">HTML5</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-css">CSS</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-css3">CSS3</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-javascript">
                    JAVASCRIPT
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-android">
                    ANDROID
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-mysql">MYSQL</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-jquery">
                    JQUERY
                  </a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-c">C</a>
                </li>
                <li>
                  <a href="https://www.wscubetech.com/quiz-test-cpp">CPP</a>
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
                  <a
                    href="https://www.wscubetech.com/bca-internship-jodhpur.html"
                    title="BCA Internship"
                  >
                    BCA Internship{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/mca-internship-training-institute-jodhpur.html"
                    title="MCA Internship"
                  >
                    MCA Internship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/bsc-it-internship-training-institute-jodhpur.html"
                    title="BSc Internship"
                  >
                    BSc Internship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/msc-it-internship-training-institute-jodhpur.html"
                    title="MSc Internship"
                  >
                    MSc Internship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/btech-internship-jodhpur.html"
                    title="BTech Internship"
                  >
                    BTech Internship{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/polytechnic-internship-training-institute-jodhpur.html"
                    title="Polytechnic Internship"
                  >
                    Polytechnic Internship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wscubetech.com/internship-summer-training-jodhpur.html"
                    title="Summer Training"
                  >
                    Summer Training
                  </a>
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
