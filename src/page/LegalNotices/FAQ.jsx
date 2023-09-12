import { Fragment } from "react";
import Header from "../../component/layout/Navbar/Navbar";
import Footer from "../../component/layout/footer";
import PageHeader from "../../component/layout/pageheader";
import styles from "./legalnotices.module.css";

const FAQ = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"FAQ"} curPage={"FAQ"} />
      <section className="pt-5 pb-lg-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.legalnotice}>
                <h3>Frequently Asked Questions:</h3> <br />
                <p>
               <b> 1. What courses does Yakeen The Learning Institute offer?</b>
                </p>
                <p>
                Yakeen offers a diverse range of courses including Graphic Design, Video Editing, Web Development, 3D Animation, Freelancing, Microsoft Word, Excel, and PowerPoint Training. Each course is designed to equip you with practical skills for your professional journey.
                </p> <br />

               <b>2. How can I enroll in a course at Yakeen?</b> 
                <p>
                Enrolling in a course at Yakeen is simple. Visit our website and navigate to the course you're interested in. Click on the "Enroll Now" button, follow the prompts, and complete the payment process. You'll receive enrollment confirmation and access to the course materials.
                </p> <br />


                <p>
                 <b>3. Are the courses suitable for beginners?</b>
                </p>
                <p>
                Yes, our courses are designed to cater to learners of all skill levels, including beginners. We provide step-by-step guidance and practical exercises to ensure a smooth learning experience, regardless of your background.
                </p> <br />

                <b>4. How are the courses conducted?</b>
                <p>
                Our courses are offered both in-person at our institute and online. In-person classes provide a classroom setting with direct interaction with instructors. Online courses are accessible 24/7, allowing you to learn at your own pace from anywhere.
                </p> <br />

                <b>5. What sets Yakeen apart from other institutes?</b>
                <p>
                Yakeen stands out for its practical approach to learning. Our courses emphasize hands-on experience and real-world application. Our expert instructors, comprehensive curriculum, and job placement assistance distinguish us as a leader in skill-focused education.
                </p> <br />


                <p>
                 <b>6. Is job placement assistance available?</b>
                </p>
                <p>
                Yes, Yakeen offers job placement assistance to our students. We collaborate with industry partners to connect you with relevant job opportunities, helping you launch your career with confidence.
                </p> <br />

                <b>7. Can I take multiple courses simultaneously?</b>
                <p>
                Yes, you can enroll in multiple courses simultaneously if your schedule allows. However, we recommend considering the time commitment required for each course to ensure a positive learning experience.
                </p> <br />


                <p>
                 <b>8. What if I need additional support during the course?</b>
                </p>
                <p>
                Our instructors are here to support you throughout your learning journey. You can reach out to them via email or during designated office hours. Additionally, our dedicated support team is available to address any technical or administrative queries.
                
                
                 </p> <br />


                 <p>
                 <b>9. Is financial assistance available for courses?</b>
                 </p>
                 <p>
                 At Yakeen, we understand the importance of education accessibility. We offer flexible payment plans for some courses. Feel free to inquire about available options when enrolling.
                 </p> <br />



                 <p>
                 <b>10. How do I stay updated on course offerings and institute news?</b>
                 </p>
                 <p>
                 You can stay updated by visiting our website's "News & Updates" section. You can also follow us on social media platforms like Facebook, Instagram, and Twitter for the latest announcements, course launches, and more.
                 </p> <br />



                 <p>
                 <b>11. What are the qualifications of Yakeen's instructors?</b>
                 </p>
                 <p>
                 Our instructors are experts in their respective fields with years of industry experience. They bring real-world insights and practical knowledge to the classroom, ensuring you receive relevant and up-to-date training.
                 </p> <br />




                 <p>
                 <b>12. How can I access the course materials for online courses?</b>
                 </p>
                 <p>
                 Once enrolled in an online course, you'll receive login credentials to our learning platform. Simply log in to access all course materials, videos, assignments, and resources.
                 </p> <br />




                 <p>
                 <b>13. Are there any prerequisites for enrolling in specific courses?</b>
                 </p>
                 <p>
                 Prerequisites vary depending on the course. You'll find detailed information about prerequisites on the course description page. If you have any questions, feel free to contact us for guidance.
                 </p> <br />




                 <p>
                    <b>14. Do you provide certificates upon course completion?</b>
                 
                 </p>
                 <p>
                 Yes, we provide certificates upon successful completion of our courses. These certificates showcase your newly acquired skills and can be a valuable addition to your resume.
                 </p> <br />




                 <p>
                 <b>15. Can I interact with other students during the course?</b>
                 </p>
                 <p>
                 Yes, we encourage interaction among students. In our online courses, we provide discussion forums where you can connect with fellow learners, share insights, and collaborate on projects.
                 </p> <br />




                 <p>
                 <b>16. Are there any trial or demo classes available?</b>
                 </p>
                 <p>
                 Yes, we occasionally offer trial or demo classes for selected courses. Keep an eye on our website and social media channels for announcements about upcoming demo sessions.
                 </p> <br />




                 <p>
                 <b>17. Is financial aid available for underprivileged students?</b>
                 </p>
                 <p>
                 We are committed to promoting education accessibility. While we may not offer financial aid, we do have flexible payment options and installment plans to accommodate various financial situations.
                 </p> <br />





                 <p>
                 <b>18. How do I change or reschedule my course timings?</b>
                 </p>
                 <p>
                 If you need to change or reschedule your course timings, please contact our support team at least [number of days] before the course starts. We will do our best to accommodate your request based on availability.
                 </p> <br />




                 <p>
                 <b>19. Can I switch from an online course to an in-person course, or vice versa?</b>
                 </p>
                 <p>
                 Yes, you may be able to switch between online and in-person courses, subject to availability. Contact us at info@yakeeninstitute.com to discuss your request.
                 
                 </p> <br />




                 <p>
                 <b>20. How do I provide feedback or suggestions about the courses?</b>
                 </p>
                 <p>
                 We value your feedback and suggestions. You can share your thoughts with your instructor during the course, or you can reach out to our support team at any time. Your input helps us improve our offerings.
                 </p> <br />


                <p>
                 <b>If you have any more questions or need further assistance, don't hesitate to contact our support team at info@yakeeninstitute.com or call +91 9631005476.</b>
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

export default FAQ;
