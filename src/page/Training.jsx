import Navbar from "../component/layout/Navbar/Navbar";
import Banner from "../component/section/Training/Banner";
import Batch from "../component/section/Training/Batch";
import Overview from "../component/section/Training/Overview";
import Curriculum from "../component/section/Training/Curriculum";
import Feature from "../component/section/Training/Feature";
import Footer from "../component/layout/footer";

const Training = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Batch />
      <Overview />
      <Curriculum />
      <Feature />
      <Footer />
    </>
  );
};

export default Training;
