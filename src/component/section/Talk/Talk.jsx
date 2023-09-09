import { Link } from "react-router-dom";
import styles from "./Talk.module.css";
import { useState } from "react";
import Message from "../../layout/PopupMessage/message";

const Talk = () => {
  const [message, setMessage] = useState(false);

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
          <button className={styles.btn} onClick={() => setMessage(true)}>
            Contact Us
          </button>
        </div>
      </div>
      <Message message={message} setMessage={setMessage} />
    </div>
  );
};

export default Talk;
