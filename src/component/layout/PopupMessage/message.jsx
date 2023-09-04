import styles from "./message.module.css";
import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Message = ({ message, setMessage }) => {
  useEffect(() => {
    const myFunction = () => {
      setMessage(true);
    };
    const timeoutId = setTimeout(myFunction, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const [name, setName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [batch, setBatch] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiry, setEnquiry] = useState("");

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
      fathersName,
      schoolName,
      class: batch,
      subject,
      phone,
      purpose_of_enquiry: enquiry,
      date: date,
    };

    const docRef = doc(db, "EnquiryRequests", name + random);

    setDoc(docRef, data)
      .then(() => {
        setMessage(false);
        alert("Your request has been submitted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`${styles.popupMessage} ${message ? "" : "d-none"}`}>
      <div className={styles.messageBox}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h4 className={styles.title}>We're Here to Help</h4>
            <button
              className={styles.close}
              onClick={() => setMessage(false)}
            ></button>
          </div>
          <div className={`${styles.body} px-4`}>
            <form
              className={`${styles.form} row`}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="name">
                  Name
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="fname">
                  Father's Name
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="fname"
                  id="fname"
                  placeholder="Enter your father's name"
                  onChange={(e) => setFathersName(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="sname">
                  School Name
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="sname"
                  id="sname"
                  placeholder="Enter name of your school"
                  onChange={(e) => setSchoolName(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="class">
                  Class
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="class"
                  id="class"
                  placeholder="Enter your class"
                  onChange={(e) => setBatch(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                  onChange={(e) => setSubject(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="phone">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className={styles.input}
                  name="phone"
                  id="phone"
                  placeholder="Enter your mobile number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="enquiry">
                  Purpose of Enquiry
                </label>
                <select
                  name="enquiry"
                  id="enquiry"
                  className={styles.formSelect}
                  onChange={(e) => setEnquiry(e.target.value)}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Tution">Tution</option>
                  <option value="Government Job Classes">
                    Government Job Classes
                  </option>
                  <option value="Spoken English Classes">
                    Spoken English Classes
                  </option>
                  <option value="NIOS">NIOS</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-12 mb-2 mt-1 text-center">
                <input type="submit" value="SUBMIT" className={styles.btn} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
