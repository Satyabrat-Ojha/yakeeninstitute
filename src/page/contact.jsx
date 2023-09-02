import { Component, Fragment, useState } from "react";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const subTitle = "Get in touch with us";
const title = "We're Always, Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: " Plot No-114 Vrindavan Garden, near Nitco Road, Khajoor Park, Ghaziabad, Uttar Pradesh 201005",
  },
  {
    imgUrl: "assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+91-96310 05476",
  },
  {
    imgUrl: "assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "support@yakeeninstitute.com career@yakeeninstitute.com",
  },
  {
    imgUrl: "assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "https://www.yakeeninstitute.com/",
  },
];

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const date = `${year}-${month}-${day}`;
  const random = Math.floor(Math.random() * 1000000000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "messages", name + random);
    const data = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
    setDoc(docRef, data)
      .then(() => {
        alert("Your message has been sent successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div className="contact-item" key={i}>
                      <div className="contact-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email *"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Mobile Number *"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject *"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  rows="8"
                  type="text"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn" type="submit">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
