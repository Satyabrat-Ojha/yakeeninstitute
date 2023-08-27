import styles from "./Curriculum.module.css";

const Curriculum = () => {
  return (
    <section className={styles.curriculumSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className={`${styles.headingContainer} w-75 mx-auto`}>
              <h2 className={`${styles.detailHeading} mb-lg-3 mb-2`}>
                Curriculum of Website Development Course{" "}
              </h2>
              <p className={styles.detailText}>
                Well-structured &amp; comprehensive curriculum designed
                according to latest trends and industry standards!
              </p>
            </div>
          </div>
          <div className="col-lg-9 mt-lg-4 mt-3">
            <div className={styles.curriculumAccordion}>
              <div className={styles.accordionItem}>
                <h3 className={`${styles.accordionHeader} bg-white`}>
                  <button
                    className={`${styles.accordionButton} bg-white shadow-none border-0 ${styles.collapsed}`}
                  >
                    HTML
                  </button>
                </h3>
              </div>
              <div className={styles.accordionItem}>
                <h3 className={`${styles.accordionHeader} bg-white`}>
                  <button
                    className={`${styles.accordionButton} bg-white shadow-none border-0 ${styles.collapsed}`}
                  >
                    HTML
                  </button>
                </h3>
              </div>
              <div className={styles.accordionItem}>
                <h3 className={`${styles.accordionHeader} bg-white`}>
                  <button
                    className={`${styles.accordionButton} bg-white shadow-none border-0 ${styles.collapsed}`}
                  >
                    HTML
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
