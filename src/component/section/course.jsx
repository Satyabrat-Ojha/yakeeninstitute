import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import courses from "../../constants/courses";

const subTitle = "Featured Courses";
const title = "Pick A Course To Get Started";

const Course = () => {
  return (
    <div className="course-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="d-flex align-items-stretch row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
            {courses.map((course, index) => (
              <div
                className="d-flex align-items-stretch col course-item"
                key={index}
              >
                <div className="course-inner d-flex flex-column justify-content-between">
                  <div>
                    <div className="course-thumb">
                      <img src={`${course.imgUrl}`} alt={`${course.imgAlt}`} />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;{course.price}</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{course.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Rating />
                          <span className="ratting-count">
                            {" "}
                            {course.reviewCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-content pt-0">
                    <Link to={`/course-single?name=${course.title}`}>
                      <h4>{course.title}</h4>
                    </Link>
                    <div className="course-details">
                      <div className="couse-count">
                        <i className="icofont-video-alt"></i> {course.lessons}x
                        Lessons
                      </div>
                      <div className="couse-topic">
                        <i className="icofont-signal"></i> {course.schedule}
                      </div>
                    </div>
                    <div className="course-footer">
                      <div className="course-author">
                        <img
                          src={`${course.tutorImg}`}
                          alt={`${course.tutorImgAlt}`}
                        />
                        <Link to="/team-single" className="ca-name">
                          {course.tutor}
                        </Link>
                      </div>
                      <div className="course-btn">
                        <Link to="/course-single" className="lab-btn-text">
                          Read More <i className="icofont-external-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
