import Rating from "../sidebar/rating";

const PageHeaderTwo = ({ course }) => {
  const title = course.title;
  const desc = course.tagline;
  const author = course.tutor;
  const authorImg = course.tutorImg;
  const reviewCount = course.reviewCount;
  const videoLink = course.link;

  return (
    <div className="pageheader-section style-2">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
          <div className="col-lg-7 col-12">
            <div className="pageheader-thumb">
              <img src={course.imgUrl} alt="rajibraj91" className="w-100" />
              <a
                href={videoLink}
                className="video-button popup"
                target="_blank"
              >
                <i className="icofont-ui-play"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="pageheader-content">
              <div className="course-category">
                <a href="#" className="course-cate">
                  {course.cate}
                </a>
              </div>
              <h2 className="phs-title">{title}</h2>
              <p className="phs-desc">{desc}</p>
              <div className="phs-thumb">
                {/* <img src={authorImg} alt="rajibraj91" />
                <span>{author}</span> */}
                <div className="course-reiew">
                  <Rating />
                  <span className="ratting-count">{reviewCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderTwo;
