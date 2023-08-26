import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import Admission from "./page/Admission/Admission";
import Training from "./page/Training/Training";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="training" element={<Training />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="course-single" element={<CourseSingle />} />
        <Route path="course-view" element={<CourseView />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-2" element={<BlogPageTwo />} />
        <Route path="blog-3" element={<BlogPageThree />} />
        <Route path="blog-single" element={<BlogSingle />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="instructor" element={<TeamPage />} />
        <Route path="instructor-single" element={<TeamSingle />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop-single" element={<ShopDetails />} />
        <Route path="cart-page" element={<CartPage />} />
        <Route path="search-page" element={<SearchPage />} />
        <Route path="search-none" element={<SearchNone />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admission" element={<Admission />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgetpass" element={<ForgetPass />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
