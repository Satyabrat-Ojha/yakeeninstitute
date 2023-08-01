import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";
import courses from "../constants/courses";

const CourseSingle = () => {
  const course = courses[0];
  console.log(course);
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
                        <li>
                          <i className="icofont-tick-mark"></i>Live Project
                          based Training{" "}
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Easy to
                          Understand Study Material
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Verifiable
                          Certification
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>100% Job
                          Assistance Program.
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Certified &
                          Experienced Trainers
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Content as per
                          Industry Standards
                        </li>
                      </ul>
                      <h4>Pre-Requisite::</h4>
                      <ul className="lab-ul">
                        <li>
                          <i className="icofont-tick-mark"></i>Computer Basic
                          Knowledge{" "}
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Graduation is
                          Recommended
                        </li>
                        <li>
                          <i className="icofont-tick-mark"></i>Course assumes no
                          previous experience
                        </li>
                      </ul>
                      {/* <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber  of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                                            <p>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p> */}
                    </div>
                  </div>
                </div>

                <div className="course-video">
                  <div className="course-video-title">
                    <h4>Course Content</h4>
                  </div>
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      {/* {course.syllabus.map((module, index) => (
                        <div className="accordion-item" key={index}>
                          <div className="accordion-header" id="accordion01">
                            <button
                              className="d-flex flex-wrap justify-content-between"
                              data-bs-toggle="collapse"
                              data-bs-target="#videolist1"
                              aria-expanded="true"
                              aria-controls="videolist1"
                            >
                              <span>1.Photoshop</span> <span>28 lectures</span>{" "}
                            </button>
                          </div>
                          <div
                            id="videolist1"
                            className="accordion-collapse collapse show"
                            aria-labelledby="accordion01"
                            data-bs-parent="#accordionExample"
                          >
                            <ul className="lab-ul video-item-list">
                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Introduction of Adobe photoshop, Menu bar,
                                  Property bar, Tools, Layers, Supportive
                                  options
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>
                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Making New Files, Introduction Broadcast
                                  presets, Dimensions of workspaces, Different
                                  types of workspaces
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>
                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Bitmap & Vector images Differentiate,
                                  Transformation, Layers using(Background
                                  Layers, other Layers)
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>
                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  After Creating new work page making
                                  selections, types of selections
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>
                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Other selection tool like lasso tool, Polygon
                                  lasso tool, Magnetic Lasso tool, Quick
                                  Selection tool, Magic wend tool.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Introduction of crop tool, Perspective Crop
                                  tool Slice tool, Passport size photos making,
                                  Frame tool
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Spot Healing brush tool, Healing Brush tool,
                                  Patch tool, red Eye tool, Skin Retouch effect
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Brush tool, Brush Presets making, Sizing of
                                  brushes, making different shapes of brush
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Clone stamp tool, Pattern stamp, different
                                  types of patterns making, cloning pictures,
                                  history brush, Art history brush
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Gradient tool, 2 or more colors gradient
                                  making, types of gradient colors filling,
                                  Paint Bucket, Blur, Sharpen, Smudge
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Dodge, Burn, Sponge tool, transforming object,
                                  Move, rotation, scale, skew, Distort,
                                  Perspective, invert, Flip vertical,
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Masking introduction, Layer Mask, paste into
                                  selections, background changing, Reverse
                                  Masking, Making wire Masking
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Vector Masking, Placing images into shapes
                                  with vector masking, Clipping Mask, Magnifying
                                  Text/Image Effect.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Quick Masking effect, 3D Popup card with quick
                                  mask & layer mask, Basket Effect on image.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  How to make digital face illusion effect with
                                  (front face & side face) with using of layer
                                  mask, Displacement effect
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Photo Identity Cards with importing excel file
                                  in photoshop & transforming images for id
                                  Cards, Carved text on wood.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Displacement effect with layer mask with brick
                                  wall & Terry cloth picture
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Double exposure Effect with 2 or more pictures
                                  manipulating, placing pictures Pencil Picture
                                  Effect
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Hair Masking with Refine Edges(Select & Mask)
                                  option to remove background from hairs, Path
                                  selections, Pen tool all.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Layer flatten, blending modes, Layer styles,
                                  bevel & embose, Drop shadow, inner glow, outer
                                  glow, options
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Adjustment layers, hue saturation option,
                                  Color balance, black & white, adjustment
                                  layer, channel mixer, color lookup.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Filter Effects Blur, Distort, Noise, Pixelate,
                                  Render, Stylize etc. Design with filter
                                  effects
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Vanishing point making 3d cube with image
                                  insertion with creating perspective plane,
                                  filter gallery options
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Action making, Recording, action set, action
                                  short key making, auto blend layer options,
                                  puppet warp tool using
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Timeline effects, Frame by frame animation,
                                  Video timeline animation, Rendering Videos
                                  etc.
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Using Mask to Create animation for website
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Website layout making, UI & UX intro
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>

                              <li className=" d-flex flex-wrap justify-content-between">
                                <div className="video-item-title">
                                  Doubts clearing class
                                </div>
                                <div className="video-item-icon">
                                  <a
                                    href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                    className="popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-play-alt-2"></i>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))} */}
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion01">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist1"
                            aria-expanded="true"
                            aria-controls="videolist1"
                          >
                            <span>1.Photoshop</span> <span>28 lectures</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion01"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Introduction of Adobe photoshop, Menu bar,
                                Property bar, Tools, Layers, Supportive options
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Making New Files, Introduction Broadcast
                                presets, Dimensions of workspaces, Different
                                types of workspaces
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Bitmap & Vector images Differentiate,
                                Transformation, Layers using(Background Layers,
                                other Layers)
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                After Creating new work page making selections,
                                types of selections
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Other selection tool like lasso tool, Polygon
                                lasso tool, Magnetic Lasso tool, Quick Selection
                                tool, Magic wend tool.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Introduction of crop tool, Perspective Crop tool
                                Slice tool, Passport size photos making, Frame
                                tool
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Spot Healing brush tool, Healing Brush tool,
                                Patch tool, red Eye tool, Skin Retouch effect
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Brush tool, Brush Presets making, Sizing of
                                brushes, making different shapes of brush
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Clone stamp tool, Pattern stamp, different types
                                of patterns making, cloning pictures, history
                                brush, Art history brush
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Gradient tool, 2 or more colors gradient making,
                                types of gradient colors filling, Paint Bucket,
                                Blur, Sharpen, Smudge
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Dodge, Burn, Sponge tool, transforming object,
                                Move, rotation, scale, skew, Distort,
                                Perspective, invert, Flip vertical,
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Masking introduction, Layer Mask, paste into
                                selections, background changing, Reverse
                                Masking, Making wire Masking
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Vector Masking, Placing images into shapes with
                                vector masking, Clipping Mask, Magnifying
                                Text/Image Effect.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Quick Masking effect, 3D Popup card with quick
                                mask & layer mask, Basket Effect on image.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                How to make digital face illusion effect with
                                (front face & side face) with using of layer
                                mask, Displacement effect
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Photo Identity Cards with importing excel file
                                in photoshop & transforming images for id Cards,
                                Carved text on wood.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Displacement effect with layer mask with brick
                                wall & Terry cloth picture
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Double exposure Effect with 2 or more pictures
                                manipulating, placing pictures Pencil Picture
                                Effect
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Hair Masking with Refine Edges(Select & Mask)
                                option to remove background from hairs, Path
                                selections, Pen tool all.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Layer flatten, blending modes, Layer styles,
                                bevel & embose, Drop shadow, inner glow, outer
                                glow, options
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Adjustment layers, hue saturation option, Color
                                balance, black & white, adjustment layer,
                                channel mixer, color lookup.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Filter Effects Blur, Distort, Noise, Pixelate,
                                Render, Stylize etc. Design with filter effects
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Vanishing point making 3d cube with image
                                insertion with creating perspective plane,
                                filter gallery options
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Action making, Recording, action set, action
                                short key making, auto blend layer options,
                                puppet warp tool using
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Timeline effects, Frame by frame animation,
                                Video timeline animation, Rendering Videos etc.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Using Mask to Create animation for website
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Website layout making, UI & UX intro
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Doubts clearing class
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="accordion02">
                          <button
                            className="d-flex flex-wrap justify-content-between"
                            data-bs-toggle="collapse"
                            data-bs-target="#videolist2"
                            aria-expanded="true"
                            aria-controls="videolist2"
                          >
                            {" "}
                            <span>2.Illustrator</span> <span>12 lectures</span>{" "}
                          </button>
                        </div>
                        <div
                          id="videolist2"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion02"
                          data-bs-parent="#accordionExample"
                        >
                          <ul className="lab-ul video-item-list">
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Introduction of Adobe Illustrator, some tools,
                                Panels-Sub panels & flower making
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Selection tool, Direct selection tool, Strokes
                                making, Different vector shapes making etc.
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Use of Pen tool, Shape builder tool
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Rotate tool, Text tool, Gradient editing in any
                                shape
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Rotate tool, Text tool, Gradient editing in any
                                shape
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                3D modeling shapes, Bar Graph with 3d Effects
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Creating shapes with Pathfinder options, Tracing
                                with raster picture
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Rotate tool & wrist watch making, Clip Masking
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Color patterns Theory, Swatches, Work with live
                                paint bucket tool
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Using art brushes, making brushes, Transforming
                                & making backgrounds from Transforming effects
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Mesh filling in objects, Tracing objects pics,
                                Radial mesh fill, Blend tool, 3d Shapes making
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Perspective grids tool, 3d Exterior Home Making
                                in file
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>

                            <li className=" d-flex flex-wrap justify-content-between">
                              <div className="video-item-title">
                                Logos & id Card & visiting card Making class &
                                illustration in illustrator
                              </div>
                              <div className="video-item-icon">
                                <a
                                  href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                  className="popup"
                                  target="_blank"
                                >
                                  <i className="icofont-play-alt-2"></i>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Author />
                <Comment />
                <Respond />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-part">
                <CourseSideDetail />
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
