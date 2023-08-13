import { Component, Fragment } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import courses from "../constants/courses";

const CourseSingle = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");
  const course = courses.find((course) => course.title === name);
  if (!course) {
    return "course name not found";
  }
  return (
    <Fragment>
      <Header />
      <PageHeaderTwo course={course} />
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3>Course Overview</h3>
                      <p>{course.overview}</p>
                      <h4>Why to Choose Us::</h4>
                      <ul className="lab-ul">
                        {course.choose.map((element, index) => (
                          <li key={index}>
                            <i className="icofont-tick-mark"></i>
                            {element}{" "}
                          </li>
                        ))}
                      </ul>
                      <h4>Pre-Requisite::</h4>
                      <ul className="lab-ul">
                        {course.preRequisite.map((element, index) => (
                          <li key={index}>
                            <i className="icofont-tick-mark"></i>
                            {element}{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="course-video">
                  <div className="course-video-title">
                    <h4>Course Content</h4>
                  </div>
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      {course.syllabus.map((module, index) => (
                        <div className="accordion-item" key={index}>
                          <div
                            className="accordion-header"
                            id={`accordion${index + 1}`}
                          >
                            <button
                              className="d-flex flex-wrap justify-content-between callapsed"
                              data-bs-toggle="collapse"
                              data-bs-target={`#videolist${index + 1}`}
                              aria-expanded="true"
                              aria-controls={`videolist${index + 1}`}
                            >
                              <span>
                                {index + 1}.{module.title}
                              </span>{" "}
                              <span>{module.lectures.length} lectures</span>{" "}
                            </button>
                          </div>
                          <div
                            id={`videolist${index + 1}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`accordion${index + 1}`}
                            data-bs-parent="#accordionExample"
                          >
                            <ul className="lab-ul video-item-list">
                              {module.lectures.map((lecture, index) => (
                                <li
                                  className=" d-flex gap-2 justify-content-between"
                                  key={index}
                                >
                                  <div className="video-item-title">
                                    {lecture.title}
                                  </div>
                                  <div className="video-item-icon">
                                    <a
                                      href={lecture.link}
                                      className="popup"
                                      target="_blank"
                                    >
                                      <i className="icofont-play-alt-2"></i>
                                    </a>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Author
                  name={course.tutor}
                  image={course.tutorImg}
                  tagline={course.tutorTagline}
                  desc={course.tutorDesc}
                />
                {/* <Comment /> */}
                {/* <Respond /> */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-part">
                <CourseSideDetail course={course} />
                <CourseSideCetagory />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CourseSingle;
