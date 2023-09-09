import styles from "./message.module.css";
import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import emailjs from "@emailjs/browser";

const Message = ({ message, setMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

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
      subject,
      message: text,
      date: date,
    };

    const docRef = doc(db, "messages", name + random);

    setDoc(docRef, data)
      .then(() => {
        sendEmail(data);
        setMessage(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendEmail = (data) => {
    const publicKey = "8yiUoaTwGwdkLtUjx";
    const serviceID = "service_6nxdelm";
    const templateID = "template_dilno9k";
    data.to = "yakeeninstituteofficial@gmail.com";

    emailjs.init(publicKey);
    emailjs.send(serviceID, templateID, data).then(
      () => {
        alert("Your message has been sent successfully");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className={`${styles.popupMessage} ${message ? "" : "d-none"}`}>
      <div className={styles.overlay} onClick={() => setMessage(false)}></div>
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
                <label className={styles.label} for="email">
                  Email
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
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
                <label className={styles.label} for="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className={styles.input}
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  onChange={(e) => setSubject(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label className={styles.label} for="message">
                  Message
                </label>
                <textarea
                  className={styles.input}
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  onChange={(e) => setText(e.target.value)}
                  required
                ></textarea>
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
