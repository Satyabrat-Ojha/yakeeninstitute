import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeader from "../component/layout/pageheader";

import { database } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const title = "Login";
const btnText = "Submit Now";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "autdata");
        navigate("/");
      })
      .catch((err) => {
        alert(err.code);
      });
    // console.log(email, password);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Login Page"} curPage={"Login"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email *" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
