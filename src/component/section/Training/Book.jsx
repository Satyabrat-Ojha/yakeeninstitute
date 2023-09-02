import styles from "./Book.module.css";
import { useState } from "react";
import { db } from "../../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const Book = ({ course }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill_center, setSkill_center] = useState(course.center);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;
    const random = Math.floor(Math.random() * 1000000000);

    const data = {
      name,
      email,
      phone,
      course: "Website Development",
      course_type: "Offline",
      skill_center,
      message: "",
      date: date,
    };

    const docRef = doc(db, "DemoRequests", email + random);

    setDoc(docRef, data)
      .then(() => {
        alert("Your request has been submitted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={styles.bookSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="w-75 mx-auto">
              <h2 className={`${styles.bookTitle} mb-lg-3 mb-2`}>
                Book 2-Days of FREE Demo Classes!
              </h2>
              <p className={styles.bookDesc}>
                Have any queries or doubts? Take 2-days of free demo of our web
                development classes in Jodhpur without paying any cost.
              </p>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className={`${styles.form} bg-white p-lg-4 p-3`}>
              <form className="row" onSubmit={(e) => handleSubmit(e)}>
                <div className="col-lg-6 mb-3">
                  <label for="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className={styles.textInput}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <label for="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className={styles.textInput}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <label for="phone" className={styles.label}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Mobile Number"
                    className={styles.textInput}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className={styles.label} for="course_type">
                    Branch
                  </label>
                  <select
                    name="skill_center"
                    id="skill_center"
                    className={styles.formSelect}
                    onChange={(e) => setSkill_center(e.target.value)}
                    value={skill_center}
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Lajpat Nagar">Lajpat Nagar</option>
                  </select>
                </div>
                <div className="col-12 text-center mt-3">
                  <button type="submit" className={styles.formBtn}>
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
