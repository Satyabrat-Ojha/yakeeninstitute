import styles from "./Admission.module.css";

const Admission = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
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
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Type Full Address </span>
                <input type="text" placeholder="Enter your address" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Father's Name</span>
                <input
                  type="text"
                  placeholder="Enter your father name"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Mother's Name</span>
                <input type="text" placeholder="Enter your mother" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>
                  Parents Educational Qualification
                </span>
                <input
                  type="text"
                  placeholder="Enter parents qualification"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}> Date Of Birth </span>
                <input
                  type="date"
                  placeholder="Enter your date of birth"
                  required
                />
              </div>

              <div className={styles.inputBox}>
                <span className={styles.details}>Aadhaar No </span>
                <input
                  type="text"
                  placeholder="Enter your adhar number"
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Date of Joining</span>
                <input type="date" placeholder="Enter joining date" required />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Course Batch Timing </span>
                <input type="text" placeholder="Enter timing" required />
              </div>

              <div className={styles.inputBox}>
                <span className={styles.details}>Course Duration</span>
                <input type="text" placeholder="Enter duration" required />
              </div>
            </div>
            <div className={styles.genderDetails}>
              <input
                type="radio"
                name="gender"
                id="dot-1"
                className={styles.dot1}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                className={styles.dot2}
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                className={styles.dot3}
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
                <label for="dot-3">
                  <span className={`${styles.dot} ${styles.three}`}></span>
                  <span className={styles.gender}>Prefer not to say</span>
                </label>
              </div>
            </div>
            <label1 for="course">Select a Course:</label1>
            <select id="course" className={styles.course} name="course">
              <option value="c">Basic Computer of Application</option>
              <option value="c++">Tally ERP/ Tally Prime</option>
              <option value="java">Advance Excel</option>
              <option value="python">
                DIT( Diploma Information Technology)
              </option>
              <option value="html">Graphic Designing</option>
              <option value="css">Website Development</option>
              <option value="js">Motion Graphic Designing</option>
              <option value="react">Java Training</option>
              <option value="sql">Digital Marketing</option>
              <option value="dbms">Video Editing</option>
              <option value="dbms">Python</option>
              <option value="dbms">Visual Basic</option>
              <option value="dbms">Power BI</option>
            </select>
            <label1 for="education">Education Qualification:</label1>
            <select id="education" className={styles.course} name="education">
              <option value="c">10th Completed</option>
              <option value="c++">12th Completed</option>
              <option value="java">Graduation Completed</option>
              <option value="python">Post Graduation Completed</option>
              <option value="html">Pursuing Schooling</option>
              <option value="css">Pursuing Graduation</option>
              <option value="js">Other</option>
            </select>
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
