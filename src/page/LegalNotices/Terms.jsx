import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/Navbar/Navbar";
import PageHeader from "../../component/layout/pageheader";
import styles from "./legalnotices.module.css";

const Terms = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Terms & Conditions"}
        curPage={"terms-and-conditions"}
      />
      <Footer />
    </Fragment>
  );
};

export default Terms;
