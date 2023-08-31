import { Link } from "react-router-dom";

const subTitle = "Popular Topics";
const title = "Which are most Favourite to Students";
const btnText = "Browse All Categories";

const categoryList = [
  {
    imgUrl: "assets/images/category/icon/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Graphic Design",
    count: "15+ Course",
    link: "/course/graphic-design-training",
  },
  {
    imgUrl: "assets/images/category/icon/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Digital Marketing ",
    count: "6+ Course",
    link: "/course/digital-marketing-training",
  },
  {
    imgUrl: "assets/images/category/icon/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Web Development ",
    count: "3+ Course",
    link: "/course/web-development-training",
  },
  {
    imgUrl: "assets/images/category/icon/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Video Editing ",
    count: "10+ Course",
    link: "/course/video-editing-training",
  },
  {
    imgUrl: "assets/images/category/icon/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Computer Knowledge",
    count: "6+ Course",
    link: "/course/computer-knowledge-training",
  },
  {
    imgUrl: "assets/images/category/icon/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "3D Animataion",
    count: "8+ Course",
    link: "/course/3d-animation-training",
  },
  {
    imgUrl: "assets/images/category/icon/07.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Freelancing ",
    count: "18+ Course",
    link: "/course/freelancing-training",
  },
  {
    imgUrl: "assets/images/category/icon/08.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    title: "Content Writing",
    count: "16+ Course",
    link: "/course/freelancing-training",
  },
];

const Category = () => {
  return (
    <div className="category-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row mx-auto justify-content-center row-cols-xl-4 row-cols-md-3 row-cols-sm-3 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col my-2" key={i}>
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img
                        src={`${val.imgUrl}`}
                        alt={val.imgAlt}
                        style={{ borderRadius: "0" }}
                      />
                    </div>
                    <div className="category-content">
                      <Link to={val.link}>
                        <h6 style={{ fontWeight: "600" }}>{val.title}</h6>
                      </Link>
                      {/* <span>{val.count}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/course" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
