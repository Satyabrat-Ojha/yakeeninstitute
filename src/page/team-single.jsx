import { Fragment } from "react";
import instructorList from "../constants/instructors";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Progress from "../component/sidebar/progress";
import Rating from "../component/sidebar/rating";
<<<<<<< HEAD

const name = "Roshan Gupta";
const degi = "Co-Founder Yakeen The Learning Institute ";
const desc = "Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables";
const subTitle = "Personal Statement";
const infoDetails = "Enthusa expedte clent focused growth strateg wherea clent centered infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables infrastructs ntrinsicl grow optimal talers rather efectve";
const skillTitle = "Personal Language Skill";
const awardTitle = "Recognitions Award";

const memInfoLisst = [
    {
        leftText: 'Adress',
        rightText: 'C-73, Shaliamar Garden, Ghaziabad',
    },
    {
        leftText: 'Email',
        rightText: 'emileelogan@gamil.com',
    },
    {
        leftText: 'Phone',
        rightText: '+021 548 736 982 ,01236985',
    },
    {
        leftText: 'website',
        rightText: 'www.yakeenthelearninginstitute.com',
    },
]

const memSocialList = [
    {
        iconName: 'icofont-twitter',
        className: 'twitter',
        siteLink: '#',
    },
     {
        iconName: 'icofont-facebook',
        className: 'facebook',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        className: 'instagram',
        siteLink: '#',
    },
    {
        iconName: 'icofont-basketball',
        className: 'basketball',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        className: 'vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-behance',
        className: 'behance',
        siteLink: '#',
    },
]

const skillList = [
    {
        percentage: '80',
        text: 'English'
    },
    {
        percentage: '70',
        text: 'Hindi'
    },
    {
        percentage: '90',
        text: 'Bangla'
    },
    {
        percentage: '50',
        text: 'Arabic'
    },
]

const awardList = [
    {
        imgUrl: 'assets/images/instructor/single/icon/01.png',
        imgAlt: 'instructor',
        text: 'Award 2018',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/02.png',
        imgAlt: 'instructor',
        text: 'Award 2019',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/03.png',
        imgAlt: 'instructor',
        text: 'Award 2020',
    },
    {
        imgUrl: 'assets/images/instructor/single/icon/04.png',
        imgAlt: 'instructor',
        text: 'Award 2022',
    },
]
=======
import { useLocation } from "react-router-dom";
>>>>>>> 469905c883fb68aa8574301caa9c1fa417a147d7

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
<<<<<<< HEAD
            </section>








            
            <Footer />
        </Fragment>
    );
}
 
export default TeamSingle;
=======
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
>>>>>>> 469905c883fb68aa8574301caa9c1fa417a147d7
