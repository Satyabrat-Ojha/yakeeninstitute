import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/Navbar/Navbar";
import PageHeader from "../../component/layout/pageheader";
import styles from "./legalnotices.module.css";

const Terms = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Terms & Conditions"}
        curPage={"terms-and-conditions"}
      />

      <section className="pt-5 pb-lg-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.legalnotice}>
                <h3>Terms & Conditions:</h3> <br />
                <p>
                  Welcome to Yakeen The Learning Institute ("Yakeen," "we,"
                  "us," or "our"). By accessing our website
                  www.yakeeninstitute.com ("Website") and utilizing our
                  services, you agree to comply with and be bound by the
                  following terms and conditions. Please read these terms
                  carefully before using our services.
                </p> <br />
 

                <h5>Acceptance of Terms:</h5> <br />
                <p>
                By enrolling in our courses, accessing our Website, or using our services, you agree to these terms and conditions. If you do not agree, please refrain from using our services.
                </p> <br />

                <h5>Course Enrollment:</h5> <br />
                <p>
                Enrolling in our courses is subject to availability and acceptance by Yakeen The Learning Institute. We reserve the right to reject any enrollment application at our discretion.
                </p> <br />

                <h5>Course Materials:</h5> <br />
                <p>
                All course materials provided by Yakeen are for educational purposes only. You may not reproduce, distribute, or use these materials for commercial purposes without our written consent.
                </p> <br />

                <h5> Payment and Fees:</h5> <br />
               
                <p>Course fees are specified on our Website and are subject to change. Payment is due upon enrollment. We may offer installment plans for certain courses, and failure to make payments may result in course access being suspended.</p>
                
<br />
                <h5>Intellectual Property:</h5> <br />
                <p>All content on our Website, including text, graphics, logos, images, videos, and software, is the property of Yakeen The Learning Institute and protected by copyright laws. You may not use, modify, or distribute our content without our permission.</p>
                <br />

                <h5>Privacy Policy:</h5> <br />

                <p>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.</p>
                <br />
                <h5>Refund Policy:</h5> <br />
                <p> Our refund policy is outlined separately. Please review and understand our refund policy before enrolling in our courses or using our services.</p>
                <br />

                <h5> Disclaimer of Liability:</h5> <br />
                <p>While we strive to provide accurate and up-to-date information, Yakeen The Learning Institute does not guarantee the accuracy, completeness, or reliability of any content on our Website or in our courses. We are not liable for any damages or losses resulting from the use of our services.</p>
                
                <br />
                <h5>Modification of Terms:</h5> <br />
                <p>Yakeen reserves the right to modify or amend these terms and conditions at any time. Updated terms will be posted on our Website. Your continued use of our services after such changes constitutes acceptance of the new terms.</p>
                <br />
                <h5>Governing Law:</h5> <br />
                <p>These terms and conditions are governed by the laws of the jurisdiction where Yakeen The Learning Institute is registered.</p>
                <br />
                <h5>Contact Us:</h5> <br />
                <p>For any inquiries regarding these terms and conditions, please contact us at info@yakeeninstitute.com or call us at 9631005476. <br /></p>
                <br />
                <p>By enrolling in our courses or using our services, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.</p>
                <br />
                <h6>Thank you for choosing Yakeen The Learning Institute. We are dedicated to your success and growth.</h6>
                <br />
                <p><b>Sincerely,</b></p>
                <p> <b>Yakeen The Learning Institute Team</b></p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Terms;
