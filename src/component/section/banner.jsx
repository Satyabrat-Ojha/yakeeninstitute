import { Link } from "react-router-dom";

const subTitle = "Stay Updated, Stay Ahead";
const title = (
  <h2 className="title">
    <span className="d-lg-block">India's Best </span>IT & Software{" "}
    <span className="d-lg-block">Training Company</span>
  </h2>
);
const desc =
  "Take your learning skills to the next level. Learn from Industry Experts. Enroll, Learn, Grow, Repeat!";

const catagoryList = [
  {
    name: "Figma",
    link: "#",
  },
  {
    name: "Adobe XD",
    link: "#",
  },
  {
    name: "illustration",
    link: "#",
  },
  {
    name: "Photoshop",
    link: "#",
  },
];

const shapeList = [
  {
    name: "16M Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "130K+ Total Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "89% Successful Students",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "23M+ Learners",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "36+ Languages",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc">{desc}</p>
                <Link to="/login" className="lab-btn">
                  <span>Get Started</span>
                </Link>
                {/* <form action="/">
                  <div className="banner-icon">
                    <i className="icofont-search"></i>
                  </div>
                  <input type="text" placeholder="Keywords of your course" />
                  <button type="submit">Search Course</button>
                </form>
                <div className="banner-catagory d-flex flex-wrap">
                  <p>Most Popular : </p>
                  <ul className="lab-ul d-flex flex-wrap">
                    {catagoryList.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>{val.name}</a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
