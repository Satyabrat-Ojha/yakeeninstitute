import { Fragment } from "react";
import Header from "../../component/layout/Navbar/Navbar";
import Footer from "../../component/layout/footer";
import PageHeader from "../../component/layout/pageheader";
import styles from "./legalnotices.module.css";

const RefundPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Refund Policy"} curPage={"refund-policy"} />

      <section className="pt-5 pb-lg-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.legalnotice}>
                <h3>Refund Policy:</h3> <br />
                <p>
                  Thank you for choosing Yakeen The Learning Institute for your
                  educational journey. We are committed to delivering
                  high-quality training and ensuring your satisfaction. Our
                  refund policy is designed to provide clarity on the terms and
                  conditions surrounding refunds for our courses and services.
                </p>{" "}
                <br />
                <h5>Course Enrollment and Refund Eligibility:</h5> <br />
                <p>
                  Upon enrolling in any of our courses, you acknowledge and
                  agree to the terms of our refund policy. We offer a refund for
                  course fees based on the following criteria: <br />
                </p>
                <br />
                <p>
                  If you decide to withdraw from a course before it commences,
                  you are eligible for a full refund of the course fee.
                </p>{" "}
                <br />
                <p>
                  If you withdraw from a course within the initial week of its
                  commencement, you are eligible for a partial refund, with an
                  administrative fee deducted from the course fee.
                </p>{" "}
                <br />
                <p>
                  No refunds will be provided after the first week of the course
                  has concluded.
                </p>{" "}
                <br />
                <h5>Refund Process:</h5> <br />
                <p>
                  {" "}
                  <b>To request a refund, you must follow these steps:</b>
                </p>
                <p>
                  a. Contact our dedicated support team via email at
                  info@yakeeninstitute.com or call us at 9631005476. Please
                  provide your full name, contact information, course details,
                  and the reason for your refund request.
                </p>
                <br />
                <p>
                  b. Our support team will review your request and respond
                  within 5 business days.
                </p>
                <br />
                <p>
                  c. If your refund request is approved, the refund will be
                  processed within 15 business days from the date of approval.
                </p>
                <br />
                <h5>Non-Refundable Items:</h5> 
                <br />
                <p>
                  Please note that certain components of our services are
                  non-refundable. These include, but are not limited to, course
                  materials, administrative fees, and any third-party expenses
                  incurred.
                </p><br />
                <h5>Job Placement and Freelancing Services:</h5><br />
                <p>
                  For students who have completed our courses and have availed
                  job placement or freelancing services through Yakeen The
                  Learning Institute, refunds are not applicable to these
                  additional services.
                </p><br />
                <h5>Contact Information:</h5> <br />
                <p>
                  <b>
                    For any refund-related inquiries or assistance, please
                    contact our support team via email at
                    info@yakeeninstitute.com or call us at 9631005476.
                  </b>
                </p> <br />
                <p>
                  Yakeen The Learning Institute reserves the right to amend or
                  modify this refund policy at any time. It is advisable to
                  review this policy periodically for any updates.
                </p> <br />
                <p>
                
                  <strong>
                    
                    Thank you for choosing Yakeen The Learning Institute. We are
                    dedicated to your success and growth.
                  </strong>
                </p> <br />
                <p>
                  <b>Sincerely,</b>
                </p>
                <p>
                  <b>Yakeen The Learning Institute Team</b>
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

export default RefundPolicy;
