const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const Author = ({ name, image, tagline, desc }) => {
  return (
    <div className="authors">
      <div className="author-thumb">
        <img src={image} alt="" />
      </div>
      <div className="author-content">
        <h5>{name}</h5>
        <span>{tagline}</span>
        <p>{desc}</p>
        <ul className="lab-ul social-icons">
          {socialList.map((val, i) => (
            <li key={i}>
              <a href={val.link} className={val.className}>
                <i className={val.iconName}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Author;
