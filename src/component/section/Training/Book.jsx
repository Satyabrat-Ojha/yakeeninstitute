import styles from "./Book.module.css";

const Book = () => {
  return (
    <section className={styles.bookSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="w-75 mx-auto">
              <h2 className={`${styles.bookTitle} mb-lg-3 mb-2`}>
                Book 2-Days of FREE Demo Classes!
              </h2>
              <p className={styles.bookDesc}>
                Have any queries or doubts? Take 2-days of free demo of our web
                development classes in Jodhpur without paying any cost.
              </p>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className={`${styles.form} bg-white p-lg-4 p-3`}>
              <form className="row">
                <div className="col-lg-6 mb-3">
                  <label for="enrollName" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="enrollName"
                    className={styles.textInput}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
