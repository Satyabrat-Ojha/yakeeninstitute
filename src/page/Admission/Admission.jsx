import styles from "./Admission.module.css";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const Admission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [parentsQualification, setParentsQualification] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [courseBatchTiming, setCourseBatchTiming] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [education, setEducation] = useState("");

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const date = `${year}-${month}-${day}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      address,
      fatherName,
      motherName,
      parentsQualification,
      dob,
      aadhar,
      joiningDate,
      courseBatchTiming,
      courseDuration,
      gender,
      course,
      education,
      registrationDate: date,
    };
    const random = Math.floor(Math.random() * 1000000000);
    const docRef = doc(db, "admissionUsers", email + random);
    setDoc(docRef, data)
      .then(() => {
        window.print();
        window.location.replace("https://pmny.in/pIrjJakiOaM0");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.Admission}>
      <div className={styles.container}>
        <div className={styles.title}>Registration</div>
        <div className={styles.content}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.userDetails}>
              <div className={styles.inputBox}>
                <span className={styles.details}>Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Type Full Address </span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Father's Name</span>
                <input
                  type="text"
                  placeholder="Enter your father name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Mother's Name</span>
                <input
                  type="text"
                  placeholder="Enter your mother"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>
                  Parents Educational Qualification
                </span>
                <input
                  type="text"
                  placeholder="Enter parents qualification"
                  value={parentsQualification}
                  onChange={(e) => setParentsQualification(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}> Date Of Birth </span>
                <input
                  type="date"
                  placeholder="Enter your date of birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <span className={styles.details}>Aadhaar No </span>
                <input
                  type="text"
                  placeholder="Enter your adhar number"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Date of Joining</span>
                <input
                  type="date"
                  placeholder="Enter joining date"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Course Batch Timing </span>
                <input
                  type="time"
                  placeholder="Enter timing"
                  value={courseBatchTiming}
                  onChange={(e) => setCourseBatchTiming(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <span className={styles.details}>Course Duration</span>
                <input
                  type="text"
                  placeholder="Enter duration"
                  value={courseDuration}
                  onChange={(e) => setCourseDuration(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.genderDetails}>
              <input
                type="radio"
                name="gender"
                id="dot-1"
                onChange={() => setGender("Male")}
                className={styles.dot1}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                onChange={() => setGender("Female")}
                className={styles.dot2}
              />

              <span className={styles.genderTitle}>Gender</span>
              <div className={styles.category}>
                <label for="dot-1">
                  <span className={`${styles.dot} ${styles.one}`}></span>
                  <span className={styles.gender}>Male</span>
                </label>
                <label for="dot-2">
                  <span className={`${styles.dot} ${styles.two}`}></span>
                  <span className={styles.gender}>Female</span>
                </label>
              </div>
            </div>
            <div className={styles.courseSelection}>
              <span className={styles.details}>Select a Course</span>
              <select
                id="course"
                className={styles.course}
                name="course"
                value={course}
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
                <option value="Website Development">Website Development</option>
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
            <div className={styles.educationSelection}>
              <label htmlFor="education">Education Qualification:</label>
              <select
                id="education"
                className={styles.course}
                name="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
              >
                <option value="">Select education qualification</option>
                <option value="10th Completed">10th Completed</option>
                <option value="12th Completed">12th Completed</option>
                <option value="Graduation Completed">
                  Graduation Completed
                </option>
                <option value="Post Graduation Completed">
                  Post Graduation Completed
                </option>
                <option value="Pursuing Schooling">Pursuing Schooling</option>
                <option value="Pursuing Graduation">Pursuing Graduation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.button}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admission;
