import Navbar from "../component/layout/Navbar/Navbar";
import Banner from "../component/section/Training/Banner";
import Batch from "../component/section/Training/Batch";
import Overview from "../component/section/Training/Overview";
import Curriculum from "../component/section/Training/Curriculum";
import Feature from "../component/section/Training/Feature";
import Book from "../component/section/Training/Book";
import Footer from "../component/layout/footer";

import courses from "../constants/courses";

const Training = () => {
  const course = courses[0];

  return (
    <>
      <Navbar />
      <Banner />
      <Batch />
      <Overview />
      <Curriculum />
      <Feature />
      <Book />
      <Footer />
    </>
  );
};

export default Training;
