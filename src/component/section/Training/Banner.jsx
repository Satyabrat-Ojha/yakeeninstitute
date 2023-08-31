import styles from "./Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Banner = ({ course }) => {
  return (
    <section className={styles.trainingBanner}>
      <div className="container">
        <div className={`row ${styles.crsRowReverse}`}>
          <div className="col-lg-8">
            <div className="pe-lg-4">
              <h1 className="mb-lg-3 mb-2">
                {course.title} in {course.center} (Classroom Course With
                Certificate &amp; Placement)
              </h1>
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
              <button className={`${styles.bookClass} me-2 me-lg-3`}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={styles.circlePlay}
                />
                Book Demo Class
              </button>
              <button className={styles.download}>Download Curriculum</button>
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
    </section>
  );
};

export default Banner;
