import { Fragment } from "react";
import instructorList from "../constants/instructors";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";
import { useLocation } from "react-router-dom";

const TeamSingle = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const name = searchParams.get("name");
  const instructor = instructorList.find(
    (instructor) => instructor.name === name
  );
  if (!instructor) {
    return "instructor name not found";
  }

  const degi = instructor.degi;
  const desc =
    "Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables";

  const memInfoLisst = [
    {
      leftText: "Address",
      rightText: "C-73, Shaliamar Garden, Ghaziabad",
    },
    {
      leftText: "Email",
      rightText: "support@yakeeninstitute.com",
    },
    {
      leftText: "Phone",
      rightText: "+91 96310 05476",
    },
  ];

  const memSocialList = [
    {
      iconName: "icofont-twitter",
      className: "twitter",
      siteLink: "#",
    },
    {
      iconName: "icofont-instagram",
      className: "instagram",
      siteLink: "#",
    },
    {
      iconName: "icofont-basketball",
      className: "basketball",
      siteLink: "#",
    },
    {
      iconName: "icofont-vimeo",
      className: "vimeo",
      siteLink: "#",
    },
    {
      iconName: "icofont-behance",
      className: "behance",
      siteLink: "#",
    },
  ];

  return (
    <Fragment>
      <Header />
      <PageHeader title={name} curPage={"instructor-single"} />
      <section className="instructor-single-section padding-tb section-bg">
        <div className="container">
          <div className="instructor-wrapper">
            <div className="instructor-single-top">
              <div className="instructor-single-item d-flex flex-wrap justify-content-between">
                <div className="instructor-single-thumb">
                  <img src={instructor.imgUrl} alt="instructor" />
                </div>
                <div className="instructor-single-content">
                  <h4 className="title">{name}</h4>
                  <p className="ins-dege">{degi}</p>
                  <Rating />
                  <p className="ins-desc">{desc}</p>
                  {/* <h6 className="subtitle">{subTitle}</h6> */}
                  {/* <p className="ins-desc">{infoDetails}</p> */}
                  <ul className="lab-ul">
                    {memInfoLisst.map((val, i) => (
                      <li
                        className="d-flex flex-wrap justify-content-start"
                        key={i}
                      >
                        <span className="list-name">{val.leftText}</span>
                        <span className="list-attr">{val.rightText}</span>
                      </li>
                    ))}
                    <li className="d-flex flex-wrap justify-content-start">
                      <span className="list-name">Follow Us</span>
                      <ul className="lab-ul list-attr d-flex flex-wrap justify-content-start">
                        {memSocialList.map((val, i) => (
                          <li key={i}>
                            <a className={val.className} href={val.siteLink}>
                              <i className={val.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default TeamSingle;
