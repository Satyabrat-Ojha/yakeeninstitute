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
import Popup from "../../layout/PopupMessage/demo";

const Banner = () => {
  const [open, setOpen] = useState(false);

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
          <Link to="/course/graphic-design-training" className={styles.itm1}>
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
          <Link to="/course/web-development-training" className={styles.itm1}>
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
          <Link to="/course/video-editing-training" className={styles.itm1}>
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
          <Link to="/course/content-writing-training" className={styles.itm1}>
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
          <Link to="/course/digital-marketing-training" className={styles.itm1}>
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
      <Popup message={open} setMessage={setOpen} />
    </>
  );
};

export default Banner;
