import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Message from "../component/layout/PopupMessage/message";
import Header from "../component/layout/Navbar/Navbar";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/Banner/Banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import Assistance from "../component/section/Assistance/Assistance";
import Talk from "../component/section/Talk/Talk";
import { useState } from "react";

const Home = () => {
  const [message, setMessage] = useState(false);

  return (
    <Fragment>
      {/* <Message message={message} setMessage={setMessage} /> */}
      <Header />
      <Banner />
      <Sponsor />
      <Category />
      <Course />
      <About />
      {/* <Instructor /> */}
      <Student />
      <Blog />
      <Achievement />
      {/* <Assistance /> */}
      <Talk />
      <Footer />
    </Fragment>
  );
};

export default Home;
