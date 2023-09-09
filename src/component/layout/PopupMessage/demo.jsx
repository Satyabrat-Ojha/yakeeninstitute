import styles from "./message.module.css";
import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import emailjs from "@emailjs/browser";

const Message = ({ message, setMessage }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course_type, setCourse_type] = useState("");
  const [skill_center, setSkill_center] = useState("");
  const [course, setCourse] = useState("");
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
      phone,
      email,
      course_type,
      skill_center,
      course,
      message: text,
      date: date,
    };

    const docRef = doc(db, "DemoRequests", email + random);

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

    const params = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      subject: "Demo Class Request",
      message: `Demo Class Request for ${data.course} course. ${data.message}`,
      to: "yakeeninstituteofficial@gmail.com",
    };

    emailjs.init(publicKey);
    emailjs.send(serviceID, templateID, params).then(
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
            <h4 className={styles.title}>Book Your Free Demo Class!</h4>
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
                <label className={styles.label} for="name">
                  Email
                </label>
                <input
                  type="email"
                  className={styles.input}
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="course_type">
                  Mode of Training
                </label>
                <select
                  name="course_type"
                  id="course_type"
                  className={styles.formSelect}
                  onChange={(e) => setCourse_type(e.target.value)}
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <div
                className={`col-md-6 mb-3 ${
                  course_type == "Online" ? "d-none" : ""
                }`}
              >
                <label className={styles.label} for="course_type">
                  Select Branch
                </label>
                <select
                  name="skill_center"
                  id="skill_center"
                  className={styles.formSelect}
                  onChange={(e) => setSkill_center(e.target.value)}
                  {...(course_type == "Online"
                    ? { disabled: true }
                    : { required: true })}
                >
                  <option value="">Select Branch</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Lajpat Nagar">Lajpat Nagar</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className={styles.label} for="course_type">
                  Choose Course
                </label>
                <select
                  name="course"
                  id="course"
                  className={styles.formSelect}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Basic Computer of Application">
                    Basic Computer of Application
                  </option>
                  <option value="Tally ERP/ Tally Prime">
                    Tally ERP/ Tally Prime
                  </option>
                  <option value="Advance Excel">Advance Excel</option>
                  <option value="DIT( Diploma Information Technology)">
                    DIT( Diploma Information Technology)
                  </option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Motion Graphic Designing">
                    Motion Graphic Designing
                  </option>
                  <option value="Java Training">Java Training</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Python">Python</option>
                  <option value="Visual Basic">Visual Basic</option>
                  <option value="Power BI">Power BI</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <label className={styles.label} for="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className={styles.input}
                  rows={2}
                  placeholder="Enter your message"
                  onChange={(e) => setText(e.target.value)}
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
