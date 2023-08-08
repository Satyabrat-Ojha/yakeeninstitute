import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import courses from "../../constants/courses";
import CourseCard from "./CourseCard/CourseCard";

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
              <CourseCard course={course} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
