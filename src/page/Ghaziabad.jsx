import Navbar from "../component/layout/Navbar/Navbar";
import Banner from "../component/section/Training/Banner";
import Batch from "../component/section/Training/Batch";
import Overview from "../component/section/Training/Overview";
import Curriculum from "../component/section/Training/Curriculum";
import Feature from "../component/section/Training/Feature";
import Book from "../component/section/Training/Book";
import Footer from "../component/layout/footer";
import courses from "../constants/ghaziabadTraning";
import { useParams } from "react-router-dom";

const kebab = (s) => {
  return s.toLowerCase().replace(/\s+/g, "-");
};

const Training = () => {
  const { name } = useParams();
  const course = courses.find((course) => kebab(course.title) === kebab(name));
  if (!course) {
    return "course name not found";
  }

  return (
    <>
      <Navbar />
      <Banner course={course} />
      <Batch course={course} />
      <Overview course={course} />
      <Curriculum course={course} />
      <Feature course={course} />
      <Book course={course} />
      <Footer />
    </>
  );
};

export default Training;
