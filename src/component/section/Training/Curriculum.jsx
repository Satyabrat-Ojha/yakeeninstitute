import styles from "./Curriculum.module.css";
import { useState } from "react";
import courses from "../../../constants/courses";

const name = courses[2].title;
const syllabus = courses[2].syllabus;

const Curriculum = () => {
  const [open, setOpen] = useState(0);

  const handleClick = (i) => {
    if (open === i) {
      setOpen(-1);
    } else {
      setOpen(i);
    }
  };

  const AccordionItem = ({ i, module }) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
      <div className={styles.accordionItem}>
        <h3 className={`${styles.accordionHeader} bg-white`}>
          <button
            className={`${
              styles.accordionButton
            } bg-white shadow-none border-0 ${
              open == i ? "" : styles.collapsed
            }`}
            onClick={() => handleClick(i)}
          >
            {module.title}
          </button>
        </h3>
        <div
          className={`accordion ${styles.accordionCollapse} ${
            open == i ? styles.show : ""
          }`}
        >
          <div className={styles.accordionBody}>
            <ul className="list-unstyled">
              {module.lectures.map((lecture, index) => (
                <li key={index}>{lecture.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.curriculumSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className={`${styles.headingContainer} w-75 mx-auto`}>
              <h2 className={`${styles.detailHeading} mb-lg-3 mb-2`}>
                Curriculum of {name}{" "}
              </h2>
              <p className={styles.detailText}>
                Well-structured &amp; comprehensive curriculum designed
                according to latest trends and industry standards!
              </p>
            </div>
          </div>
          <div className="col-lg-9 mt-lg-4 mt-3">
            <div className={styles.curriculumAccordion}>
              {syllabus.map((module, index) => (
                <AccordionItem key={index} i={index} module={module} />
              ))}
            </div>
          </div>
          <div className="col-lg-12 pt-lg-5 pt-4">
            <div className="text-center">
              <button className={`btn py-3 px-4 ${styles.batchBtn}`}>
                Download Full Brouchure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
