import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={`${styles.heading} mb-lg-3 mb-2`}>
              Why WsCube Tech is The Best Web Development Training Institute in
              Jodhpur?
            </h2>
          </div>
          <div className="col-12 pt-lg-5 pt-4">
            <div className="row">
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature1.svg"
                    alt="feature1"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Training by Pro Web Developers
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    In this course, you will get complete training and practice
                    sessions from a professional and expert website developer
                    who has 10+ years of experience in the field.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature2.svg"
                    alt="feature2"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Most Comprehensive Curriculum
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    We offer the most detailed training, covering all aspects of
                    web development in-depth. You learn both static and dynamic
                    website development.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature3.svg"
                    alt="feature3"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Intensive Classroom Training
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    To offer you the best learning experience, our classrooms
                    are fully digitized, distraction-free, and provide 1:1
                    personal interaction with the mentor.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature4.svg"
                    alt="feature4"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Hands-on 12 Live Projects
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    Web development is a skill that requires immense practice.
                    For that, you will work on a total of 12 projects (both
                    dynamic and static websites).
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature5.svg"
                    alt="feature5"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Job Assistance
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    We prepare you for the web development interview, and
                    arrange your interviews with top companies so that you can
                    kickstart your career instantly after the course.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-4 mb-3">
                <div
                  className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                >
                  <img
                    src="assets/images/training/feature6.svg"
                    alt="feature6"
                    className="img-fluid mb-3"
                  />
                  <h3 className={`${styles.boxHeading} mb-3`}>
                    Web Development Certification
                  </h3>
                  <p className={`${styles.boxPara} mb-0`}>
                    Once your training is over, you get a professional
                    certificate that you can add to your resume and easily
                    explore promising career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
