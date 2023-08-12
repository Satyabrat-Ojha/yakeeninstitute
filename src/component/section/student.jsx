
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Kajal',
        degi: 'Graphic Designer',
        desc: 'Yakeen The Learning Insitute have made efforts ensuring maximum nurder of students placement. They started grooming us for placement in the first few months',
    },

     {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Sonali Verma',
        degi: 'Web Developer',
        desc: 'The study environment is good and trainers are full of knowledge. I personally recommend Yakeen The Learning Institute to all the students who looking for quality education',
    },
    {
        imgUrl: 'assets/images/feedback/student/03.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Vivek Kumar',
        degi: 'Excel Expert',
        desc: 'I have completed my Certification from Yakeen The Learning Institute, Complete project based training really help me to sharpen my skills',
    },
   
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/01.jpg" alt="student feedback" />
                                    <a href="https://www.youtube.com/embed/MU3qrgR2Kkc" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;