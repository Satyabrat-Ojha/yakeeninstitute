import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <section className={styles.overviewSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={`${styles.overviewHeading} mb-lg-3 mb-2`}>
              Overview of Our Web Development Course in Jodhpur{" "}
            </h2>
          </div>
        </div>
        <div className={`row mt-4 align-items-center ${styles.crsRowReverse}`}>
          <div className="col-lg-8 align-items-center h-100 d-flex">
            <div className={`h-100 ${styles.overviewContent} mb-3`}>
              {" "}
              <p>
                Website development is among the most in-demand skills today
                that offers highly-paid job roles and great career scope. As
                almost every business is shifting online, and existing websites
                are expanding to compete in the market, there is a huge demand
                for web developers in India and globally.
              </p>
              <p>
                With WsCube Tech’s classroom-based web design and development
                course in Jodhpur, you will acquire all the essential skills.
                You will work on real website projects and build different types
                of sites from scratch. The entire training is led by an
                experienced Developer.{" "}
              </p>
              <p>
                Upon completing the course, you will receive the certificate,
                internship opportunities, as well as job assistance. We ensure
                that you become highly skilled and explore great career
                opportunities in the field of website designing and development.{" "}
              </p>
              <p>
                Once you have the skills, you can choose to go for a full-time
                job, become a freelance web developer, or start your own website
                development company.{" "}
              </p>
              <p>
                Take two days of FREE demo classes to learn risk-free and
                confidently!
              </p>{" "}
            </div>
          </div>
          <div className="col-lg-4 col-sm-9 col-11">
            <div className={`${styles.certificate} p-3 bg-white mb-3`}>
              <img
                loading="lazy"
                src="assets/images/training/jodhpur-center-certificate.webp"
                alt="WsCube Tech certificate"
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
