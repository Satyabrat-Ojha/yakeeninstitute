import { Link } from "react-router-dom";
import styles from "./Talk.module.css";

const Talk = () => {
  return (
    <div className={styles.talk}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsBody}>
          <p className={styles.overline}>Got more questions? </p>
          <h2 className={styles.title}>Talk to our team directly.</h2>
          <p className={styles.subtitle}>
            A program advisor will get in touch with you shortly.
          </p>
        </div>
        <div className={styles.contactUsBtn}>
          <Link to="/contact">
            <button className={styles.btn}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Talk;
