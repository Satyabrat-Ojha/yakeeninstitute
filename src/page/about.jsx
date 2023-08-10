import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AchievementTwo from "../component/section/achievement-2";
import Blog from "../component/section/blog";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";




const subTitle = "About Our Yakeen The Learning Institute";
const title = "Good Qualification Services And Better Skills";
const desc = "Company founded by academicians and managed by the highly experienced professional group of partners has already nutured numerous students. Over the last 12 years, we have acquired a distinct reputation for providing high-quality professionals to the industry.";

const year = "30+";
const expareance = "Years Of Experiences";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'About Us',
        desc: 'Yakeen The Learning Institute  is ISO Certified 9001:2015 accredited EduTech Company that offers online and offline programs in career critical competencies such as Graphic Design , Digital Marketing , Web Development , Freelancing , Video Editing , ChatGpt , Content Writing , AI , DevOps etc.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Our Vision',
        desc: 'At Yakeen The Learning Institute, Our Vision is to Building Careers of Tomorrow and to become the largest online and offline learning ecosystem for continuing education, in partnership with corporates and academia.',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Our Mission',
        desc: 'We are on a mission to make professionals proficient and future ready. At TechVidya, our mission is to provide opportunities to advance your professional journey through rigorous online and offline programs.',
    },
]


const AboutPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Welcome to Yakeen The Learning Institute Education Platform'} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Student />
            <Instructor />
            <Skill />
            <AchievementTwo />
            <Blog />
            <Footer />
        </Fragment>
    );
}

export default AboutPage;
 