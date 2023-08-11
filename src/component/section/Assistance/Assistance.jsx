import styles from "./Assistance.module.css";
import jobAssistance from "./jobAssistance.png";

const Assistance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={jobAssistance} alt="Left Image" />
      </div>
      <div className={styles.content}>
        <h2>Yakeen The Learning Institute</h2>
        <h1>Job Assistance Process</h1>
        <div className={styles.container2}>
          <div className={styles.row}>
            <div className={styles.box}>1. Complete Course</div>
            <div className={styles.box}>2. Submit Projects & Assignments</div>
            <div className={styles.box}>3. Create Portfolio</div>
          </div>
          <div className={styles.row}>
            <div className={styles.box}>
              4. Get Shortlisted for Suitable Job
            </div>
            <div className={styles.box}>5. Attend Interview</div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={styles.placed}>6. Get Placed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
