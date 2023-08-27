import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  //   const Offer = null; // no offer
  const Offer = {
    discount: 50,
    code: "YAKEEN50",
  };

  const kebab = (s) => {
    return s
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const courseName = kebab(course.title);

  return (
    <Link
      to={`/course/${courseName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${styles.CourseCard} ${isHovered && styles.active}`}>
        <div className={styles.CardImage}>
          <span className={styles.ImageSpan}>
            <img className={styles.Image} alt="" src={course.imgUrl} />
          </span>
          <span className={styles.Category}>{course.cate}</span>
        </div>
        <div className={styles.CardDetails}>
          <div className={styles.Language}>
            <span>{course.language}</span>
          </div>
          <div className={`${styles.Title} ${isHovered && styles.active}`}>
            <span>{course.title}</span>
          </div>
          <div className={styles.VideoCounts}>
            <ul>
              <li>
                {course.syllabus.reduce(
                  (total, course) => total + course.lectures.length,
                  0
                )}{" "}
                Videos
              </li>
              <li>{course.duration}</li>
              <li>{course.syllabus.length} Modules</li>
            </ul>
          </div>
          <div className={styles.PriceTag}>
            {Offer && <div className={styles.Off}>{Offer.discount}% Off</div>}
            {Offer && (
              <div className={styles.Gross}>
                ₹<span>{course.price}</span>
              </div>
            )}
            <div className={styles.NetPrice}>
              <span className={styles.Amount}>
                ₹
                <span>
                  {Offer &&
                    Math.floor((course.price * (100 - Offer.discount)) / 100)}
                  {!Offer && course.price}
                </span>
                <span className={styles.Onwards}>
                  <span>&nbsp;</span>onwards
                </span>
              </span>
            </div>
          </div>
          {Offer && (
            <div className={styles.Offer}>
              <span className={styles.Onwards}>
                <p>
                  After applying <span>'{Offer.code}'</span>
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
