import styles from "./Overview.module.css";

const Overview = ({ course }) => {
  return (
    <section className={styles.overviewSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={`${styles.overviewHeading} mb-lg-3 mb-2`}>
              Overview of our {course.title} in {course.center}{" "}
            </h2>
          </div>
        </div>
        <div className={`row mt-4 align-items-center ${styles.crsRowReverse}`}>
          <div className="col-lg-8 align-items-center h-100 d-flex">
            <div className={`h-100 ${styles.overviewContent} mb-3`}>
              {" "}
              {course.overview.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-sm-9 col-11">
            <div className={`${styles.certificate} p-3 bg-white mb-3`}>
              <img
                loading="lazy"
                src={course.certificateImgUrl}
                alt="YakeenInstitute certificate"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
