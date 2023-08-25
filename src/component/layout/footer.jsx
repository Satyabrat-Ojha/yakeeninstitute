const addressList = [
  {
    iconName: "icofont-phone",
    text: "+91 96310 05476",
  },
  {
    iconName: "icofont-phone",
    text: "+91 96549 18028",
  },
  {
    iconName: "icofont-google-map",
    text: "Plot No-114 Vrindavan Garden, near Nitco Road, Khajoor Park, Ghaziabad, Uttar Pradesh 201005",
  },
  {
    iconName: "icofont-envelope",
    text: "support@yakeeninstitute.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/yakeenlearning",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/yakeeninstitute",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/company/yakeen-institute/?originalSubdomain=in",
    className: "linkedin",
  },
  {
    iconName: "icofont-youtube-play",
    siteLink: "https://www.youtube.com/@yakeenlearning/videos",
    className: "instagram",
  },
];

const programmingList = [
  {
    text: "Web Development Training",
    link: "#",
  },
  {
    text: "Ethical Hacking Training",
    link: "#",
  },
  {
    text: "Software Testing Training",
    link: "#",
  },
  {
    text: "Node JS Training",
    link: "#",
  },
  {
    text: "Python Training",
    link: "#",
  },
  {
    text: "Java Training",
    link: "#",
  },
  {
    text: "C++ Training",
    link: "#",
  },
  {
    text: "Android Development Training",
    link: "#",
  },
  {
    text: "Angular Courses",
    link: "#",
  },
];

const designList = [
  {
    text: "Graphic Design Training",
    link: "#",
  },
  {
    text: "Video Editing Training",
    link: "#",
  },
  {
    text: "Animation Training",
    link: "#",
  },
  {
    text: "Digital Art Training",
    link: "#",
  },
  {
    text: "Motion Graphic Training",
    link: "#",
  },
  {
    text: "Photoshop Training",
    link: "#",
  },
  {
    text: "Illustrator Training",
    link: "#",
  },
  {
    text: "Wordpress Course",
    link: "#",
  },
];

const specialList = [
  {
    text: "HTML",
    link: "#",
  },
  {
    text: "Graphic Design",
    link: "#",
  },
  {
    text: "CSS",
    link: "#",
  },
  {
    text: "Digital Marketing",
    link: "#",
  },
  {
    text: "Photoshop Shortkeys",
    link: "#",
  },
  {
    text: "Wordpress Pulgin",
    link: "#",
  },
  {
    text: "Design Resources",
    link: "#",
  },
];

const companyList = [
  {
    text: "About Us",
    link: "#",
  },
  {
    text: "Press",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Newsroom",
    link: "#",
  },
  {
    text: "Branding Assets",
    link: "#",
  },
  {
    text: "Sitemap",
    link: "#",
  },
  {
    text: "Blog",
    link: "#",
  },
  {
    text: "Careers",
    link: "#",
  },
];

const FooterThree = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view" style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="row g-4 row-cols-xl-5 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Programming Training</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {programmingList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Design Training</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {designList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Special Notes</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {specialList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Company</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul">
                        {companyList.map((val, i) => (
                          <li key={i}>
                            <a href={val.link}>{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>Contact Team</h4>
                    </div>
                    <div className="content">
                      {/* <p>{desc}</p> */}
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i} className="pt-2">
                            <i className={val.iconName}></i>
                            {val.text}
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a
                              href={val.siteLink}
                              target="_blank"
                              className={val.className}
                            >
                              <i className={val.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
