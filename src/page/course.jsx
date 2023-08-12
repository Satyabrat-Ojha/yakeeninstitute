import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import courses from "../constants/courses";
import CourseCard from "../component/section/CourseCard/CourseCard";

const CoursePage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Courses"} curPage={"Course Page"} />
      <GroupSelect />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-8 of 8 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <SkillSelect select={"all"} />
                    <div className="select-icon">
                      <i className="icofont-rounded-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-stretch row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {courses.map((course, index) => (
                <CourseCard course={course} key={index} />
              ))}
            </div>
            <div className="row"></div>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
