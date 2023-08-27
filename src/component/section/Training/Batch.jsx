import styles from "./Batch.module.css";

const Batch = () => {
  return (
    <section className={styles.batchSection}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className={`mb-lg-3 ${styles.detailsHeading} mb-2`}>
              Upcoming Batch Details{" "}
            </h2>
          </div>
          <div className="col-lg-8">
            <div className={styles.batchTable}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Duration</th>
                    <th>Timings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>(Mon - Sat) 5 Months</td>
                    <td>9:00 AM to 10:00 AM </td>
                  </tr>{" "}
                  <tr>
                    <td>(Mon - Sat) 5 Months</td>
                    <td> 10:00 AM to 11:00 AM</td>
                  </tr>{" "}
                  <tr>
                    <td>(Mon - Sat) 5 Months</td>
                    <td>4:00 PM to 5:00 PM</td>
                  </tr>{" "}
                  <tr>
                    <td>(Mon - Sat) 5 Months</td>
                    <td>5:00 PM to 6:00 PM </td>
                  </tr>{" "}
                  <tr>
                    <td>(Mon - Sat) 5 Months</td>
                    <td> 6:00 PM to 7:00 PM </td>
                  </tr>{" "}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-8 pt-lg-5 pt-4">
            <div className="text-center">
              <button
                className={`btn py-lg-3 py-2 px-md-5 px-4 ${styles.batchBtn}`}
              >
                Get Next Batch Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Batch;
