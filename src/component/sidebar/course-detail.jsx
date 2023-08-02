import { Link } from "react-router-dom";

const CourseSideDetail = ({ course }) => {
  const price = course.price;
  const excenge = "Limited time offer";
  const paymentTitle = "Secure Payment:";
  const shareTitle = "Share This Course:";
  const btnText = "Enrolled Now";

  const totalLessons = (course) => {
    let count = 0;
    course.syllabus.map((val) => {
      count = count + val.lectures.length;
    });
    return count;
  };

  const csdcList = [
    {
      iconName: "icofont-ui-alarm",
      leftText: "Course level",
      rightText: course.level,
    },
    // {
    //   iconName: "icofont-book-alt",
    //   leftText: "Course Duration",
    //   rightText: "10 week",
    // },
    {
      iconName: "icofont-signal",
      leftText: "Modules",
      rightText: course.syllabus.length + "x",
    },
    {
      iconName: "icofont-video-alt",
      leftText: "Duration",
      rightText: course.duration,
    },
    // {
    //   iconName: "icofont-abacus-alt",
    //   leftText: "Quizzes",
    //   rightText: "0",
    // },
    // {
    //   iconName: "icofont-hour-glass",
    //   leftText: "Pass parcentages",
    //   rightText: "80",
    // },
    {
      iconName: "icofont-certificate",
      leftText: "Certificate",
      rightText: course.certificate,
    },
    {
      iconName: "icofont-globe",
      leftText: "Language",
      rightText: course.language,
    },
  ];

  const socialList = [
    {
      siteLink: "#",
      iconName: "icofont-twitter",
      className: "twitter",
    },
    {
      siteLink: "#",
      iconName: "icofont-vimeo",
      className: "vimeo",
    },
    {
      siteLink: "#",
      iconName: "icofont-rss",
      className: "rss",
    },
  ];
  return (
    <div className="course-side-detail">
      <div className="csd-title">
        <div className="csdt-left">
          <h4 className="mb-0">
            <sup>₹</sup>
            {price}
          </h4>
        </div>
        <div className="csdt-right">
          <p className="mb-0">
            <i className="icofont-clock-time"></i>
            {excenge}
          </p>
        </div>
      </div>
      <div className="csd-content">
        <div className="csdc-lists">
          <ul className="lab-ul">
            {csdcList.map((val, i) => (
              <li key={i}>
                <div className="csdc-left">
                  <i className={val.iconName}></i>
                  {val.leftText}
                </div>
                <div className="csdc-right">{val.rightText}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-payment">
          <div className="sp-title">
            <h6>{paymentTitle}</h6>
          </div>
          <div className="sp-thumb">
            <img src="assets/images/pyment/01.jpg" alt="CodexCoder" />
          </div>
        </div>
        <div className="sidebar-social">
          <div className="ss-title">
            <h6>{shareTitle}</h6>
          </div>
          <div className="ss-content">
            <ul className="lab-ul">
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink} className={val.className}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course-enroll">
          <Link to="/signup" className="lab-btn">
            <span>{btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSideDetail;
