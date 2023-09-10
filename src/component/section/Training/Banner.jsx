import styles from "./Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import zoomIcon from "./zoom-icon.png";
import { useState } from "react";
import Popup from "../../layout/PopupMessage/demoCourse";

const Banner = ({ course }) => {
  const [message, setMessage] = useState(false);

  return (
    <section className={styles.trainingBanner}>
      <div className="container">
        <div className={`row ${styles.crsRowReverse}`}>
          <div className="col-lg-8">
            {course.center == "Online" && (
              <div
                className={`d-flex align-items-center mb-lg-4 mb-3 ${styles.liveClass}`}
              >
                <img
                  loading="lazy"
                  src={zoomIcon}
                  alt="Live Class"
                  class="img-fluid me-3"
                  width="130"
                />
                <ul className={`d-flex align-items-center bg-white`}>
                  <li>Live Classes</li>
                </ul>
              </div>
            )}
            <div className="pe-lg-4">
              <h1 className="mb-lg-3 mb-2">{course.heading}</h1>
              <div
                className={`${styles.ratingContainer} d-flex align-items-center my-3 my-lg-4`}
              >
                <FontAwesomeIcon icon={faStar} className={styles.rating} />
                <FontAwesomeIcon icon={faStar} className={styles.rating} />
                <FontAwesomeIcon icon={faStar} className={styles.rating} />
                <FontAwesomeIcon icon={faStar} className={styles.rating} />
                <FontAwesomeIcon icon={faStarHalf} className={styles.rating} />

                <span className={`ps-2 ${styles.ratingNo}`}>
                  4.9 (4857 Reviews)
                </span>
              </div>
              <div className={styles.bannerP}>
                {course.desc.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
            <div className={`${styles.bannerButtons} d-flex mb-3 mb-lg-0`}>
              <button
                className={`${styles.bookClass} me-2 me-lg-3`}
                onClick={() => setMessage(true)}
              >
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={styles.circlePlay}
                />
                Book Demo Class
              </button>
              <a href="#">
                <button className={styles.download}>Download Curriculum</button>
              </a>
            </div>
          </div>
          <div
            className={`col-lg-4 d-flex align-items-center ${styles.bannerImgContainer}`}
          >
            <img
              src={course.imgUrl}
              class={`img-fluid ${styles.bannerImg}`}
              alt={`${course.title} in ${course.center} (Classroom Course With Certificate &amp; Placement)`}
            ></img>
          </div>
        </div>
      </div>
      <Popup message={message} setMessage={setMessage} Course={course} />
    </section>
  );
};

export default Banner;
