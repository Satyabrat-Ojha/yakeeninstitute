import styles from "./Banner.module.css";
import img1 from "./01.jpg";
import img2 from "./02.jpg";
import img3 from "./03.jpg";
import img4 from "./04.jpg";
import img6 from "./06.jpg";
import img8 from "./08.jpg";
import Artboard from "./Artboard 1-100.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.AboutPageIntro}>
      <div className={styles.AboutPageLeft}>
        <h1>
          Skills That Transform, <br />
          Dreams into Reality
        </h1>

        <p>
          Explore your potential through courses like Graphic Design, Web
          Development, and more. Master industry-relavant skills for a
          successful journey with Yakeen the Learning Instite.
        </p>
        <Link to="/course">
          <button className={styles.allBtn}>
            trending courses &nbsp; {">"}
          </button>
        </Link>
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
            <i>&#129170;</i>
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
            <i>&#129170;</i>{" "}
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
            <i>&#129170;</i>
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
            <i>&#129170;</i>
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
            <i>&#129170;</i>
          </div>
        </Link>
        <Link to="/course">
          <h4>EXPLORE ALL COURSES</h4>
        </Link>
      </div>
    </div>
  );
};

export default Banner;