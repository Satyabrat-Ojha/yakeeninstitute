import { Fragment } from "react";
import Header from "../../component/layout/Navbar/Navbar";
import Footer from "../../component/layout/footer";
import PageHeader from "../../component/layout/pageheader";
import styles from "./legalnotices.module.css";

const VisionMission = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Vision Mission"} curPage={"vision-mission"} />
      <section className="pt-5 pb-lg-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.legalnotice}>
                <h3> VISION</h3> <br />
                <p>
                  At Yakeen The Learning Institute, our vision is to create a
                  world where a person's potential is not limited by degrees
                  alone. We envision a future where every individual possesses
                  practical skills that empower them to thrive in the
                  professional world, irrespective of their educational
                  background. Our vision extends to every household having
                  skilled individuals who can confidently contribute to the
                  workforce, making meaningful contributions to their
                  communities and society as a whole. 
                </p><br /> 
                <h3> MISSION</h3> <br />
                <p>
                  Our mission is to bridge the gap between traditional education
                  and real-world employability. We are committed to nurturing
                  talent and fostering a culture of skill development. Our
                  mission is to provide comprehensive, hands-on training that
                  equips individuals with the practical expertise needed to
                  excel in their chosen fields. By offering skill-focused
                  courses and personalized support, we aim to empower students
                  to pursue their aspirations, secure meaningful employment, and
                  become key contributors to the ever-evolving global economy.
                </p>{" "}
                <br /> <br />
                <h5>Why Choose Yakeen The Learning Institute:</h5> <br />
                <p>
                  <b>Skill-Centric Approach: </b> Our courses prioritize
                  practical skills that are in demand across industries,
                  ensuring you're job-ready. <br /> <br />
                  <b>Empowerment: </b> We empower individuals to take charge of
                  their careers by providing them with valuable skills that go
                  beyond degrees. <br /> <br />
                  <b>Hands-On Learning:</b> Gain real-world experience through
                  interactive projects, simulations, and industry-relevant
                  training. <br />
                  <br />
                  <b> Career Support: </b> We provide job placement assistance
                  and mentorship to guide you toward your desired career path.{" "}
                  <br />
                  <br />
                  <b> Community of Skill Seekers:</b> Join a dynamic community
                  of learners who share the vision of a skilled and empowered
                  workforce.
                </p>{" "}
                <br /> <br />
                <h5>Embrace a Skilled Future with Yakeen:</h5> <br /> 
                <p>
                  Yakeen The Learning Institute is not just an educational
                  institution; it's a catalyst for change. Our vision and
                  mission reflect our dedication to transforming education and
                  employment paradigms. By choosing Yakeen, you're not merely
                  enrolling in courses; you're embracing a future where skills
                  take precedence and open doors to a world of
                  opportunities.Join us in reshaping the future. Let's build a
                  world where everyone is skilled, confident, and equipped to
                  create a meaningful impact in their professional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default VisionMission;
