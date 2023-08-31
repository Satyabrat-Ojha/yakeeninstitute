import styles from "./Banner.module.css";
import { useState } from "react";
import img1 from "./01.jpg";
import img2 from "./02.jpg";
import img3 from "./03.jpg";
import img4 from "./04.jpg";
import img6 from "./06.jpg";
import img8 from "./08.jpg";
import Artboard from "./Artboard 1-100.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course_type, setCourse_type] = useState("");
  const [skill_center, setSkill_center] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

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
      message,
      date: date,
    };

    const docRef = doc(db, "DemoRequests", email + random);

    setDoc(docRef, data)
      .then(() => {
        setOpen(false);
        alert("Your request has been submitted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.AboutPageIntro}>
        <div className={styles.AboutPageLeft}>
          <h1>
            Skills That Transform, <br />
            Dreams into Reality
          </h1>

          <p>
            Offline & Online certification courses in Graphic Designing, Video
            Editing, ChatGPT, Digital Marketing, Web/App Development, Advance
            Excel, Data Science, and 20+ more skills
          </p>
          <Link to="/course">
            <button className={styles.blueBtn}>Explore Courses</button>
          </Link>
          <button className={styles.whiteBtn} onClick={() => setOpen(true)}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              className={styles.circlePlay}
            />
            {"  "}
            Book Demo Class
          </button>
          <div className={styles.AboutPageImgStack}>
            <img src={Artboard} alt="" className={styles.AboutPageImg} />
          </div>
        </div>

        <div className={styles.template}>
          <p className={styles.tempp}>popular courses</p>
          <Link
            to="/course-single?name=Graphic%20Design%20Tranning"
            className={styles.itm1}
          >
            <div className={styles.icon}>
              <img src={img1} width="45px" />
            </div>
            <div className={styles.detail}>
              <h3 style={{ fontWeight: "400" }}>Graphic Design</h3>
              <p>Visual Creations at Your Fingertips </p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faCaretRight} />{" "}
            </div>
          </Link>
          <Link
            to="/course-single?name=Web%20Development%20Tranning"
            className={styles.itm1}
          >
            <div className={styles.icon}>
              <img src={img3} width="45px" />
            </div>
            <div className={styles.detail}>
              <h3>Web Development</h3>
              <p>Crafting Digital Experiences with Code</p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faCaretRight} />{" "}
            </div>
          </Link>
          <Link
            to="/course-single?name=Video%20Editing%20Tranning"
            className={styles.itm1}
          >
            <div className={styles.icon}>
              <img src={img4} width="45px" />
            </div>
            <div className={styles.detail}>
              <h3>Video Editing</h3>
              <p>Storytelling through Visual Mastery</p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faCaretRight} />{" "}
            </div>
          </Link>
          <Link
            to="/course-single?name=Content%20Writing%20Tranning"
            className={styles.itm1}
          >
            <div className={styles.icon}>
              <img src={img8} width="45px" />
            </div>
            <div className={styles.detail}>
              <h3>Data Entry</h3>
              <p>Precision in Information Management</p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faCaretRight} />{" "}
            </div>
          </Link>
          <Link
            to="/course-single?name=Digital%20Marketing%20Tranning"
            className={styles.itm1}
          >
            <div className={styles.icon}>
              <img src={img2} width="45px" />
            </div>
            <div className={styles.detail}>
              <h3>Digital Marketing</h3>
              <p>Navigation the Digital Landscape</p>
            </div>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faCaretRight} />{" "}
            </div>
          </Link>
          <hr className={styles.hrule} />
          <Link to="/course" className={styles.explore}>
            <h4>EXPLORE ALL COURSES</h4>
            <FontAwesomeIcon
              color="#ff0000"
              fontSize="16px"
              icon={faAngleRight}
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.wrapperBanner} ${open ? "" : "d-none"}`}>
        <div className={styles.dialog}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h4 className={styles.title}>Book Your Free Demo Class!</h4>
              <button
                className={styles.close}
                onClick={() => setOpen(false)}
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
                    Course Type
                  </label>
                  <select
                    name="course_type"
                    id="course_type"
                    className={styles.formSelect}
                    onChange={(e) => setCourse_type(e.target.value)}
                    required
                  >
                    <option value="">Select Course Type</option>
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
                    Skill Center
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
                    <option value="">Select Skill Center</option>
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
                    onChange={(e) => setMessage(e.target.value)}
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
    </>
  );
};

export default Banner;
