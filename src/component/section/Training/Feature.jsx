import styles from "./Feature.module.css";

const Feature = ({ course }) => {
  const WhatsAppNumber = course.whatsappNumber;
  const WhatsAppMessage = `I am interested in your ${course.title} in ${course.center} (Classroom Course With Certificate and Placement), please give a call back.`;

  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className={`${styles.heading} mb-lg-3 mb-2`}>
              Why Yakeen Institute is The Best {course.title}
              {course.center !== "Online" && ` Institute in ${course.center}`}?
            </h2>
          </div>
          <div className="col-12 pt-lg-5 pt-4">
            <div className="row">
              {course.features.map((feature, index) => (
                <div className="col-lg-4 mb-lg-4 mb-3" key={index}>
                  <div
                    className={`${styles.featureBox} bg-white text-center p-4 h-100`}
                  >
                    <img
                      src={feature.imgUrl}
                      alt="feature1"
                      className="img-fluid mb-3"
                    />
                    <h3 className={`${styles.boxHeading} mb-3`}>
                      {feature.title}
                    </h3>
                    <p className={`${styles.boxPara} mb-0`}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
