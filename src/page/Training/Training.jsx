import styles from "./Training.module.css";
import Navbar from "../../component/layout/Navbar/Navbar";
import Banner from "../../component/section/Training/Banner";
import Batch from "../../component/section/Training/Batch";
import Footer from "../../component/layout/footer";

const Training = () => {
  return (
    <div className={styles.training}>
      <Navbar />
      <Banner />
      <Batch />
      <Footer />
    </div>
  );
};

export default Training;
