import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeader from "../component/layout/pageheader";

import { database } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const title = "Register Now";
const btnText = "Get Started Now";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "autdata");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Register Now"} curPage={"Sign Up"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              {/* <div className="form-group">
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                />
              </div> */}
              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
